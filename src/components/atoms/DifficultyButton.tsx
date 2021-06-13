import { css } from "styled-components";
import { DifficultyValueEnum } from "../../types";

interface DifficultyButtonProps {
  selected: string;
}

const DifficultyButton = ({ selected }: DifficultyButtonProps) => {
  switch (selected) {
    case (DifficultyValueEnum.easy,
    DifficultyValueEnum.normal,
    DifficultyValueEnum.hard):
      return css`
        width: 25%;
        height: 4rem;
        border-radius: 0.5rem;
        cursor: pointer;
        background-color: blue;
        color: white;
      `;
    default:
      return css`
        width: 25%;
        height: 4rem;
        border-radius: 0.5rem;
        cursor: pointer;
      `;
  }
};

export default DifficultyButton;
