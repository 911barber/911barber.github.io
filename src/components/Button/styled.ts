import styled from "styled-components";

export const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  margin-top: 15px;
  line-height: 55px;
  text-align: center;
  color: #eeeeee;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  outline: 0;
  opacity: 1;
  pointer-events: auto;
  white-space: nowrap;
  @media (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (max-width: 460px) {
    font-size: 0.95rem;
  }
  &:hover {
    &:after {
      transform: translateY(0) rotateX(0);
      opacity: 1;
    }

    &:before {
      transform: translateY(50%) rotateX(90deg);
      opacity: 0;
    }
  }

  &:after {
    content: attr(data-back);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    color: #eeeeee;
    background-color: #e3b873;
    transform: translateY(-50%) rotateX(90deg);
    opacity: 0;
    transition: 0.5s;
  }

  &:before {
    content: attr(data-front);
    position: relative;
    top: 0;
    left: 0;
    display: block;
    padding: 0 35px;
    line-height: 55px;
    color: #eeeeee;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(0) rotateX(0);
    opacity: 1;
    transition: 0.5s;
    border: 2px solid #e3b873;
  }
`;
