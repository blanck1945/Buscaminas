import { DifficultyValueEnum } from "../types";

export const difficultyConfig = (value: string) => {
  switch (value) {
    case DifficultyValueEnum.easy:
      return {
        MAX_COLS: 9,
        MAX_ROWS: 9,
        NO_OF_BOMBS: 1,
      };
    case DifficultyValueEnum.normal:
      return {
        MAX_COLS: 12,
        MAX_ROWS: 12,
        NO_OF_BOMBS: 3,
      };
    case DifficultyValueEnum.hard:
      return {
        MAX_COLS: 16,
        MAX_ROWS: 16,
        NO_OF_BOMBS: 33,
      };
  }
};
