import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { H2, StyledLinkA, SectionMarginBottom } from "../Typography";

export const TrainingBg = styled(BackgroundImage)`
  width: 100%;
  min-height: 600px;
  height: calc(100vh - 83px);
  filter: brightness(70%);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${SectionMarginBottom}
  @media (max-width: 1023px) {
    height: 70vh;
  }
  @media (max-width: 767px) {
    height: 100vh;
  }
`;

export const TrainingSection = styled.section`
  position: relative;
`;

export const InnerBlock = styled.div`
  position: absolute;
  top: calc(50% - 210px);
  right: 5%;
  left: 5%;
  text-align: center;
  z-index: 4;
`;

export const TrainingTel = styled(StyledLinkA)`
  font-weight: 400;
  font-size: 2.3rem;
  line-height: 7.5rem;
  @media (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.7rem;
  }
`;

export const Title = styled(H2)`
  font-weight: 400;
  font-size: 2.4rem;
  color: #e3b873;
  margin-bottom: 2rem;
  line-height: 3.5rem;
  word-spacing: 0.4rem;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`;

export const TrainingInfo = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  color: #eeeeee;
  @media (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  @media (max-width: 460px) {
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
