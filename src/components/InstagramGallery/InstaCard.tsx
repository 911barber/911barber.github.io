import React, { useState } from "react";
import { InstagramItemCard, InstagramItem } from "./styled";
import { useSpring, animated, config } from "react-spring";
import { isTablet, isMobile } from "react-device-detect";

type Props = {
  fluid: any;
  last?: boolean;
};

const InstaCard: React.FC<Props> = ({ fluid, last }) => {
  const [flipped, set] = useState(false);
  const effect = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: config.slow
  });

  const AnimatedInstagramItem = animated(InstagramItem);
  return (
    <>
      {isMobile || isTablet ? (
        <InstagramItemCard
          href="https://www.instagram.com/911barber.by/"
          target="blank_"
          rel="noopener noreferrer"
        >
          <AnimatedInstagramItem fluid={fluid} last={last} alt="photo" />
        </InstagramItemCard>
      ) : (
        <InstagramItemCard
          href="https://www.instagram.com/911barber.by/"
          target="blank_"
          rel="noopener noreferrer"
          onMouseEnter={() => set(!flipped)}
          onMouseLeave={() => set(!flipped)}
        >
          <AnimatedInstagramItem
            fluid={fluid}
            style={effect}
            last={last}
            alt="photo"
          />
        </InstagramItemCard>
      )}
    </>
  );
};

export default InstaCard;
