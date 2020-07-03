import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { InstagramGallerySection, InstagramGalleryWrapper } from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";
import InstaCard from "./InstaCard";

const InstagramGallery: React.FC = () => {
  const {
    instagram: { frontmatter },
    insta1: {
      childImageSharp: { fluid: insta1 }
    },
    insta2: {
      childImageSharp: { fluid: insta2 }
    },
    insta3: {
      childImageSharp: { fluid: insta3 }
    },
    insta4: {
      childImageSharp: { fluid: insta4 }
    }
  } = useStaticQuery(graphql`
    query {
      instagram: markdownRemark(frontmatter: { type: { eq: "instagram" } }) {
        frontmatter {
          title
          description
        }
      }
      insta1: file(relativePath: { eq: "insta1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      insta2: file(relativePath: { eq: "insta6.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      insta3: file(relativePath: { eq: "insta9.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      insta4: file(relativePath: { eq: "insta10.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { title, description } = frontmatter;
  return (
    <InstagramGallerySection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <InstagramGalleryWrapper>
        <InstaCard fluid={insta1} />
        <InstaCard fluid={insta2} />
        <InstaCard fluid={insta3} />
        <InstaCard fluid={insta4} last />
      </InstagramGalleryWrapper>
    </InstagramGallerySection>
  );
};

export default InstagramGallery;
