import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  CosmeticsSection,
  CosmeticsImg,
  CosmeticsName,
  CosmeticsCard,
  Stars
} from "./styled";
import {
  SectionTitle,
  SectionDescription,
  CardContainer,
  CardInfo,
  SecondButton
} from "../Typography";

const Cosmetics: React.FC = () => {
  const {
    cosmetics: { frontmatter },
    stuff1: {
      childImageSharp: { fluid: stuff1 }
    },
    stuff2: {
      childImageSharp: { fluid: stuff2 }
    }
  } = useStaticQuery(graphql`
    query {
      cosmetics: markdownRemark(frontmatter: { type: { eq: "cosmetics" } }) {
        frontmatter {
          title
          description
          item1
          info1
          item2
          info2
          button
        }
      }
      stuff1: file(relativePath: { eq: "stuff1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stuff2: file(relativePath: { eq: "stuff2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    item1,
    info1,
    item2,
    info2,
    button
  } = frontmatter;
  return (
    <CosmeticsSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <CardContainer>
        <CosmeticsCard>
          <CosmeticsImg fluid={stuff1} alt="cosmetics" />
          <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
          <CosmeticsName>{item1}</CosmeticsName>
          <CardInfo>{info1}</CardInfo>
          <SecondButton
            href="https://www.t.me/juliavoytahova/"
            target="blank_"
            rel="noopener noreferrer"
          >
            {button}
          </SecondButton>
        </CosmeticsCard>
        <CosmeticsCard>
          <CosmeticsImg fluid={stuff2} alt="cosmetics" />
          <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
          <CosmeticsName>{item2}</CosmeticsName>
          <CardInfo>{info2}</CardInfo>
          <SecondButton
            href="https://www.t.me/juliavoytahova/"
            target="blank_"
            rel="noopener noreferrer"
          >
            {button}
          </SecondButton>
        </CosmeticsCard>
      </CardContainer>
    </CosmeticsSection>
  );
};

export default Cosmetics;
