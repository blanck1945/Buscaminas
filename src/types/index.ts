export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export type Cell = { value: CellValue; state: CellState; red?: boolean };

export enum FaceEnum {
  smile = "😁",
  oh = "😮",
  lost = "😵",
  won = "😎",
}

export enum GameStateEnum {
  none = "none",
  live = "live",
  lost = "lost",
  won = "won",
}

export enum CellValueEnum {
  bomb = "bomb",
  flag = "flag",
}

export enum DifficultyValueEnum {
  easy = "easy",
  normal = "normal",
  hard = "hard",
}

export enum StylesValuesEnum {
  classic = "classic",
  jungle = "cungle",
}

export interface GameConfig {
  MAX_ROWS: string;
  MAX_COLS: string;
  NO_OF_BOMBS: string;
}

export interface ScoreType {
  _id: string;
  time: number;
  player: string;
  difficulty: string;
}
