import styled from "styled-components";
import Img from "gatsby-image";
import { SectionMarginBottom, FlexColumnCenterCenter } from "../Typography";

export const TeamSection = styled.section`
  ${FlexColumnCenterCenter}
  ${SectionMarginBottom}
`;

export const EmployeePhoto = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 1.2rem auto;
  border-radius: 50%;
  filter: brightness(90%);
`;

export const EmployeeName = styled.p`
  color: #e3b873;
`;

export const EmployeePosition = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #cccccc;
`;
