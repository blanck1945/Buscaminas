import { DifficultyValueEnum, FaceEnum } from "../../types";
import { generateCells } from "../../utils";
import { difficultyConfig } from "../../utils/DifficultyConfig";
import * as GameConstants from "../constants/GameConstants";
import { GameInitialStateInterface } from "../types";

export const GameInitialState: GameInitialStateInterface = {
  cells: generateCells(difficultyConfig(DifficultyValueEnum.easy)),
  face: FaceEnum.smile,
  time: 0,
  gameState: "none",
  bombCounter: 10,
};

const GameReducer = (state = GameInitialState, action: any) => {
  switch (action.type) {
    case GameConstants.SET_CELLS_TO:
      return {
        ...state,
        cells: action.payload,
      };
    case GameConstants.SET_GAME_STATE_TO:
      return {
        ...state,
        gameState: action.payload,
      };
    case GameConstants.SET_FACE_TO:
      return {
        ...state,
        face: action.payload,
      };
    case GameConstants.SET_TIME_TO:
      return {
        ...state,
        time: action.payload,
      };
    case GameConstants.SET_BOMB_COUNTER_TO:
      return {
        ...state,
        bombCounter: action.payload,
      };
    default:
      return state;
  }
};

export default GameReducer;
