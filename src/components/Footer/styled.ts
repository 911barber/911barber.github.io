import styled from "styled-components";
import { FlexSpaceBetweenCenter } from "../Typography";

export const FooterContainer = styled.footer`
  ${FlexSpaceBetweenCenter}
  margin: 0 auto;
  width: 60%;
  height: 80px;
  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
`;

export const Navigation = styled.nav`
  width: 50%;
  font-size: 0.85rem;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  ${FlexSpaceBetweenCenter}
  list-style: none;
  text-transform: uppercase;
  color: #e3b873;
`;

export const NavItem = styled.li`
  word-spacing: 0.2rem;
`;
