import React from "react";
import Button from "../Button";
import { SlideImage } from "./styled";
import { H1, H4, SliderItem, InnerBlock, SliderText } from "../Typography";

type Props = {
  fluid: any;
  title: string;
  desc1?: string;
  desc2?: string;
  idx: number;
};

const MainSliderItem: React.FC<Props> = ({
  fluid,
  title,
  desc1,
  desc2,
  idx
}) => {
  return (
    <SliderItem>
      <SlideImage fluid={fluid} alt="slide" />
      <InnerBlock>
        <SliderText>
          {idx === 0 ? <H1>{title}</H1> : <H1 as="h2">{title}</H1>}
          <H4>{desc1}</H4>
          {desc2 && <H4>{desc2}</H4>}
          <Button
            link="https://n247635.yclients.com/company:242564?o=m704631"
            dataBack="Online запись"
            dataFront="Online запись"
          />
        </SliderText>
      </InnerBlock>
    </SliderItem>
  );
};

export default MainSliderItem;
