import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterContainer,
  Copyright,
  Navigation,
  NavList,
  NavItem
} from "./styled";
import { StyledLink } from "../Typography";

const Footer: React.FC = () => {
  const {
    navigation: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      navigation: markdownRemark(frontmatter: { type: { eq: "navigation" } }) {
        frontmatter {
          navItem1
          navItem3
          navItem4
          navItem6
        }
      }
    }
  `);

  const { navItem1, navItem3, navItem4, navItem6 } = frontmatter;

  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()}, 911barber.by</Copyright>
      <Navigation>
        <NavList>
          <NavItem>
            <StyledLink to="/#main">{navItem1}</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/#prices">{navItem4}</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/#training">{navItem3}</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/#contacts">{navItem6}</StyledLink>
          </NavItem>
        </NavList>
      </Navigation>
    </FooterContainer>
  );
};

export default Footer;
