import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { YouTubeSection, YouTubeButton } from "./styled";
import { SectionTitle, SectionDescription, StyledLinkA } from "../Typography";
import { useTransition, animated } from "react-spring";

const YouTube: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean | undefined>(false);
  const {
    youtube: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      youtube: markdownRemark(frontmatter: { type: { eq: "youtube" } }) {
        frontmatter {
          title
          description
        }
      }
    }
  `);

  const { title, description } = frontmatter;

  const message = useTransition(isVisible, null, {
    from: { opacity: 0, transform: "translateY(-4rem)" },
    enter: { opacity: 1, transform: "translateY(0rem)" },
    leave: { opacity: 0, transform: "translateY(-4rem)" },
    config: { duration: 2000 }
  });

  const handleClick = () => {
    if (isVisible) {
      const a = document.createElement("a");
      a.href = "https://www.youtube.com/";
      a.target = "blank_";
      a.rel = "noopener noreferrer";
      a.click();
      setVisible(false);
    }
    if (!isVisible) {
      setVisible(true);
    }
  };

  return (
    <YouTubeSection visible={isVisible}>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <StyledLinkA as="div">
        <YouTubeButton onClick={handleClick} />
      </StyledLinkA>
      {message.map(
        ({ item, key, props }: any) =>
          item && (
            <animated.h2 style={props} key={key}>
              Coming soon...
            </animated.h2>
          )
      )}
    </YouTubeSection>
  );
};

export default YouTube;
