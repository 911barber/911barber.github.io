import React from "react";
import { StyledButton } from "./styled";

type Props = {
  link: string;
  dataBack: string;
  dataFront: string;
};

const Button: React.FC<Props> = ({ link, dataBack, dataFront }) => {
  return (
    <StyledButton
      href={link}
      target="blank_"
      rel="noopener noreferrer"
      data-back={dataBack}
      data-front={dataFront}
    />
  );
};

export default Button;
