import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../Button";
import { SlideImage, Review, Description } from "./styled";
import { H4, SliderItem, InnerBlock, SliderText } from "../Typography";

type Props = {
  fluid: any;
  review: string;
  person: string;
  desc: string;
};

const ReviewsSliderItem: React.FC<Props> = ({
  fluid,
  review,
  person,
  desc
}) => {
  return (
    <SliderItem>
      <SlideImage fluid={fluid} alt="slide" />
      <InnerBlock>
        <SliderText>
          <Review>{review}</Review>
          <H4>{person}</H4>
          <Description>{desc}</Description>
          <Button
            link="https://n247635.yclients.com/company:242564?o=m704631"
            dataBack="Оставить отзыв"
            dataFront="Оставить отзыв"
          />
        </SliderText>
      </InnerBlock>
    </SliderItem>
  );
};

export default ReviewsSliderItem;
