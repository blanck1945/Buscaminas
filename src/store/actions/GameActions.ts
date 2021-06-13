import { FaceEnum } from "../../types";
import * as GameConstants from "../constants/GameConstants";

export const startGame = () => {
  return {
    type: GameConstants.START_GAME,
  };
};

//  -------- Face Actions -------------

export const setFaceTo = (payload: FaceEnum) => {
  return {
    type: GameConstants.SET_FACE_TO,
    payload,
  };
};

//  -------- Cells Actions -------------

export const setCellsTo = (payload: any) => {
  return {
    type: GameConstants.SET_CELLS_TO,
    payload,
  };
};

//  -------- Time Actions -------------

export const setTimeTo = (payload: number) => {
  return {
    type: GameConstants.SET_TIME_TO,
    payload,
  };
};

//  -------- Bombs Actions -------------

export const setBombsCounterTo = (payload: number) => {
  return {
    type: GameConstants.SET_BOMB_COUNTER_TO,
    payload,
  };
};

//  -------- Game State Actions -------------

export const setGameStateTo = (payload: string) => {
  return {
    type: GameConstants.SET_GAME_STATE_TO,
    payload,
  };
};
