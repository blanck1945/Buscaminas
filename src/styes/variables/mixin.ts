import { css } from "styled-components";

export const setBorderMixin = (leftTop: string, rightBottom: string) => {
  const BorderMixin = css`
    border-bottom-color: ${rightBottom};
    border-left-color: ${leftTop};
    border-right-color: ${rightBottom};
    border-style: solid;
    border-top-color: ${leftTop};
    border-width: 0.4rem;
  `;

  return BorderMixin;
};

const ButtonMixin = css`
  &:active {
    border-bottom-color: white;
    border-left-color: #7b7b7b;
    border-right-color: white;
    border-top-color: #7b7b7b;
  }
`;

export const mixins = {
  ButtonMixin,
  setBorderMixin,
};
