import styled from "styled-components";
import { FlexColumnCenterCenter } from "../Typography";
import YouTubeIcon from "../../assets/images/svg/youtube.svg";

interface IYouTube {
  visible?: boolean;
}

export const YouTubeSection = styled.section`
  ${FlexColumnCenterCenter}
  margin-bottom: ${({ visible }: IYouTube) => (visible ? "73px" : "100px")};
  @media (max-width: 767px) {
    margin-bottom: ${({ visible }: IYouTube) => (visible ? "53px" : "80px")};
  }
`;

export const YouTubeButton = styled(YouTubeIcon)`
  width: 200px;
  height: 200px;
`;
