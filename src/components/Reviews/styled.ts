import styled from "styled-components";
import { StyledSlideImage } from "../Typography";

export const SlideImage = styled(StyledSlideImage)`
  height: 600px;
  background-position: center;
  filter: brightness(40%);
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Review = styled.p`
  line-height: 1.7rem;
  font-size: 1.3rem;
  color: #eeeeee;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #eeeeee;
`;
