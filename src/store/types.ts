import { Cell, DifficultyValueEnum, FaceEnum } from "../types";

export interface StylesInitialStateInterface {
  boardStyle: string;
}

export interface GameInitialStateInterface {
  cells: Cell[][];
  face: FaceEnum;
  time: number;
  gameState: string;
  bombCounter: number;
}

export interface AppInitialStateInterface {
  isRunning: boolean;
  player: string;
  difficulty: DifficultyValueEnum.easy;
  config: any;
  counter: number;
  scores: any;
}

export interface AppGlobalState {
  app: AppInitialStateInterface;
  styles: StylesInitialStateInterface;
  game: GameInitialStateInterface;
}
