import styled from "styled-components";
import {
  StyledLinkA,
  FlexColumnCenterCenter,
  FlexSpaceBetweenCenter
} from "../Typography";
import Сlock from "../../assets/images/svg/clock.svg";
import MapMarker from "../../assets/images/svg/map-marker.svg";
import MobilePhone from "../../assets/images/svg/mobile-phone.svg";

const IconSize = `
  width: 35px;
  height: 35px;

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;

export const ContactsSection = styled.section`
  ${FlexSpaceBetweenCenter}
  color: #e3b873;
  max-width: 80%;
  margin: 100px auto;
  @media (max-width: 1800px) {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 80px auto 20px;
  }
`;

export const ContactsBlock = styled(StyledLinkA)`
  ${FlexColumnCenterCenter}
  flex: 1;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const ContactsIcon = styled.div`
  margin-bottom: 0.6rem;
`;

export const StyledСlock = styled(Сlock)`
  ${IconSize}
`;

export const StyledMapMarker = styled(MapMarker)`
  ${IconSize}
`;

export const StyledMobilePhone = styled(MobilePhone)`
  ${IconSize}
`;

export const ContactsPlace = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  margin-bottom: 5px;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`;

export const ContactsP = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  @media (max-width: 1023px) {
    font-size: 1.2rem;
  }
`;
