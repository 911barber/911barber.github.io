import styled from "styled-components";
import Logo from "gatsby-image";
import Instagram from "../../assets/images/svg/instagram.svg";
import Telegram from "../../assets/images/svg/telegram.svg";
import Yclients from "../../assets/images/svg/yclients.svg";
import Phone from "../../assets/images/svg/phone.svg";
import { IView, IMobileBlock } from "../../interfaces";
import { Hover, StyledLinkA, FlexSpaceBetweenCenter } from "../Typography";

const IconSize = `
  width: 20px;
  margin: 0.5rem 0.9rem;
  @media (max-width: 360px) {
    width: 18px;
    margin: 0.5rem 0.7rem;
  }
`;

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  color: #e3b873;
  background-color: ${({ view }: IView) => (view ? "transparent" : "#1b1b1b")};
  box-shadow: ${({ view }: IView) =>
    view ? "none" : "0px 10px 50px rgba(0, 0, 0, 0.7)"};
  transition: all 0.3s ease-out;
`;

export const HeaderContainer = styled.div`
  ${FlexSpaceBetweenCenter}
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ view }: IView) => (view ? "15px 20px" : "10px 20px")};
  transition: all 0.3s ease-out;
  @media (max-width: 1600px) {
    padding: ${({ view }: IView) => (view ? "15px 120px" : "10px 120px")};
  }
  @media (max-width: 1023px) {
    padding: ${({ view }: IView) => (view ? "15px 60px" : "10px 60px")};
  }
  @media (max-width: 960px) {
    padding: ${({ view }: IView) => (view ? "15px 35px" : "10px 35px")};
  }
  @media (max-width: 460px) {
    padding: ${({ view }: IView) => (view ? "15px 20px" : "10px 20px")};
  }
`;

export const Block = styled.div`
  width: 222px;
  text-align: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileBlock = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    padding-right: ${({ padding }: IMobileBlock) => (padding ? padding : "0")};
  }
`;

export const Tel = styled(StyledLinkA)`
  font-size: 1.5rem;
  padding: 0 0 0.3rem 0.5rem;
  @media (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  color: #e3b873;
  text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
  width: 190px;
  margin: 0 auto;
  @media (max-width: 1023px) {
    width: 130px;
  }
  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const StyledTelegram = styled(Telegram)`
  ${IconSize}
`;

export const StyledYclients = styled(Yclients)`
  ${IconSize}
`;

export const StyledInstagram = styled(Instagram)`
  ${IconSize}
  color: ${props => props.clr || "#e3b873"};
  ${Hover}
`;

export const StyledPhone = styled(Phone)`
  width: 17px;
  @media (max-width: 1023px) {
    width: 14px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
