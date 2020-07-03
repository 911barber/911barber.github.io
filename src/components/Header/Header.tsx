import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useStaticQuery, graphql } from "gatsby";
import { StyledLink, StyledLinkA } from "../Typography";
import {
  HeaderStyle,
  HeaderContainer,
  StyledLogo,
  StyledInstagram,
  StyledTelegram,
  StyledYclients,
  Tel,
  StyledPhone,
  Block,
  MobileBlock
} from "./styled";
import "./header.scss";

const Header: React.FC<any> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 100 && !isScroll) {
        setScroll(true);
      }
      if (currentScrollY < 100 && isScroll) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  const {
    contacts: { frontmatter: contacts },
    navigation: { frontmatter: navigation },
    logo: {
      childImageSharp: { fluid: logo }
    }
  } = useStaticQuery(graphql`
    query {
      contacts: markdownRemark(frontmatter: { type: { eq: "contacts" } }) {
        frontmatter {
          tel
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

  const { tel } = contacts;
  const { navItem1, navItem3, navItem4, navItem6 } = navigation;

  return (
    <HeaderStyle view={!isScroll}>
      <HeaderContainer view={!isScroll}>
        <Block>
          <StyledPhone />
          <Tel href="tel:+375 447 666 911">{tel}</Tel>
        </Block>
        <Block>
          <StyledLink to="/">
            <StyledLogo fluid={logo} alt="logo" />
          </StyledLink>
        </Block>
        <Block>
          <StyledLinkA
            href="https://www.t.me/minsk911/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledTelegram />
          </StyledLinkA>
          <StyledLinkA
            href="https://n247635.yclients.com/company:242564?o=m704631"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledYclients />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barber.by/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledInstagram />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barbieshop/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledInstagram clr="#F783AC" />
          </StyledLinkA>
        </Block>
        <MobileBlock padding="0">
          <StyledLink to="/">
            <StyledLogo fluid={logo} alt="logo" />
          </StyledLink>
        </MobileBlock>
        <MobileBlock padding="30px">
          <StyledLinkA
            href="https://www.t.me/minsk911/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledTelegram />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barber.by/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledInstagram wdth="20px" />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barbieshop/"
            target="blank_"
            rel="noopener noreferrer"
          >
            <StyledInstagram wdth="20px" clr="#F783AC" />
          </StyledLinkA>
          <Menu
            right
            noOverlay
            width={"100%"}
            isOpen={menuOpen}
            onStateChange={state => setMenuOpen(state.isOpen)}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            burgerButtonClassName={
              isScroll ? "bm-burger-button" : "sticky-burger"
            }
          >
            <StyledLink onClick={() => setMenuOpen(false)} to="/#">
              {navItem1}
            </StyledLink>
            <StyledLink onClick={() => setMenuOpen(false)} to="/#prices">
              {navItem4}
            </StyledLink>
            <StyledLink onClick={() => setMenuOpen(false)} to="/#training">
              {navItem3}
            </StyledLink>
            <StyledLink onClick={() => setMenuOpen(false)} to="/#contacts">
              {navItem6}
            </StyledLink>
          </Menu>
        </MobileBlock>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
