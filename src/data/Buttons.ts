import { DifficultyValueEnum, StylesValuesEnum } from "../types";

export const DifficultyArr = [
  {
    type: "difficulty",
    content: "Facil",
    refValue: DifficultyValueEnum.easy,
  },
  {
    type: "difficulty",
    content: "Normal",
    refValue: DifficultyValueEnum.normal,
  },
  {
    type: "difficulty",
    content: "Dificil",
    refValue: DifficultyValueEnum.hard,
  },
];

export const StylesArr = [
  {
    type: "styles",
    content: "Classic",
    refValue: StylesValuesEnum.classic,
  },
  {
    type: "styles",
    content: "Jungle",
    refValue: StylesValuesEnum.jungle,
  },
];
