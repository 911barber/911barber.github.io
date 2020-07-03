import React from "react";
import {
  PriceListBlockStyle,
  PriceItem,
  PriceItemText,
  PriceItemHeading,
  PriceItemHeadingSpan,
  PriceItemCost
} from "./styled";

type Props = {
  array: any;
  second?: boolean;
};

const PriceListBlock: React.FC<Props> = ({ array, second }) => {
  return (
    <PriceListBlockStyle second={second}>
      {array.map(({ node: { frontmatter } }: any) => {
        const { id, item, price } = frontmatter;
        return (
          <PriceItem key={id}>
            <PriceItemText>
              <PriceItemHeading>
                <PriceItemHeadingSpan>{item}</PriceItemHeadingSpan>
              </PriceItemHeading>
              <PriceItemCost>{price}</PriceItemCost>
            </PriceItemText>
          </PriceItem>
        );
      })}
    </PriceListBlockStyle>
  );
};

export default PriceListBlock;
