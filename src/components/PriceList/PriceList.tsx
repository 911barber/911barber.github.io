import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  PriceListSection,
  PriceListContainer,
  PriceListBlockWrapper
} from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";
import Button from "../Button";
import PriceListBlock from "./PriceListBlock";

const PriceList: React.FC = () => {
  const {
    priceList: { frontmatter: priceList },
    pricesM: { edges: pricesM },
    pricesW: { edges: pricesW }
  } = useStaticQuery(graphql`
    query {
      priceList: markdownRemark(frontmatter: { type: { eq: "priceList" } }) {
        frontmatter {
          title
          description
          button
        }
      }
      pricesM: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "pricesM" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              item
              price
            }
          }
        }
      }
      pricesW: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "pricesW" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              item
              price
            }
          }
        }
      }
    }
  `);

  const { title, description, button } = priceList;

  return (
    <PriceListSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <PriceListContainer>
        <PriceListBlockWrapper>
          <PriceListBlock array={pricesM.slice(0, 5)} />
          <PriceListBlock array={pricesM.slice(5, 9)} second />
        </PriceListBlockWrapper>
        <PriceListBlockWrapper>
          <PriceListBlock array={pricesW.slice(0, 5)} />
          <PriceListBlock array={pricesW.slice(5, 9)} second />
        </PriceListBlockWrapper>
      </PriceListContainer>
      <Button
        link="https://n247635.yclients.com/company:242564/idx:0/service"
        dataBack={button}
        dataFront={button}
      />
    </PriceListSection>
  );
};

export default PriceList;
