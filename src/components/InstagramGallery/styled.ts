import styled from "styled-components";
import { SectionMarginBottom, FlexColumnCenterCenter } from "../Typography";
import BackgroundImage from "gatsby-background-image";

export interface ILast {
  last?: boolean;
}

export const InstagramGallerySection = styled.section`
  ${FlexColumnCenterCenter}
  ${SectionMarginBottom}
`;

export const InstagramGalleryWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 25%;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InstagramItemCard = styled.a`
  width: 100%;
  overflow: hidden;
`;

export const InstagramItem = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  height: 400px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${({ last }: ILast) => (last ? "center 25%" : "top")};
  will-change: transform;
  @media (max-width: 1023px) {
    height: 300px;
  }
  @media (max-width: 767px) {
    height: 500px;
  }
  @media (max-width: 459px) {
    height: 400px;
  }
`;
