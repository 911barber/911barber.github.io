import styled from "styled-components";
import {
  SectionMarginBottom,
  FlexColumnCenterCenter,
  FlexRowCenterCenter
} from "../Typography";
import { ISecond } from "../../interfaces";

export const PriceListSection = styled.section`
  ${FlexColumnCenterCenter}
  ${SectionMarginBottom}
`;
export const PriceListContainer = styled.div`
  ${FlexRowCenterCenter}
  margin-bottom: 20px;
  width: 65%;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    width: 85%;
  }
`;

export const PriceListBlockWrapper = styled.div`
  @media (max-width: 1023px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PriceListBlockStyle = styled.div`
  flex: 0 0 50%;
  padding: 0 20px;
  @media (max-width: 767px) {
    display: ${({ second }: ISecond) => second && "none"};
  }
`;

export const PriceItem = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const PriceItemText = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const PriceItemHeading = styled.h5`
  width: calc(100% - 80px);
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 400;
  @media (max-width: 1023px) {
    font-size: 1rem;
    font-weight: 300;
  }
  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

export const PriceItemHeadingSpan = styled.span`
  padding-right: 20px;
  color: #eeeeee;
  background-color: #1b1b1b;
`;

export const PriceItemCost = styled.span`
  width: 80px;
  text-align: right;
  color: #e3b873;
  background-color: #1b1b1b;
  font-size: 1.2rem;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 20%;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #785028;
    @media (max-width: 460px) {
      border-bottom: 1px dashed transparent;
    }
  }
`;

export const PriceItemDescription = styled.p`
  padding-right: 40px;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;
