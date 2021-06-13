import styled from "styled-components";

export const ButtonStyled = styled.button`
  ${({ theme }) => {
    return theme.setBorderMixin("white", "#7b7b7b");
  }}
  ${({ theme }) => {
    return theme.ButtonMixin;
  }}
  background-color: ${({ theme }) => theme.lGrey};
  align-items: center;
  display: flex;
  font-weight: bold;
  height: 3rem;
  justify-content: center;
  width: 3rem;

  &.visible {
    border-color: #7b7b7b;
    border-width: 1px;
  }

  &.red {
    background: red;
  }

  span {
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }

  &.value-1 {
    color: blue;
  }
  &.value-2 {
    color: green;
  }
  &.value-3 {
    color: red;
  }
  &.value-4 {
    color: purple;
  }
  &.value-5 {
    color: maroon;
  }
  &.value-6 {
    color: turquoise;
  }
  &.value-7 {
    color: black;
  }
  &.value-8 {
    color: gray;
  }
`;
