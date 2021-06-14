import { DifficultyValueEnum } from "../../types";
import * as AppConstants from "../constants/AppConstants";
import { AppInitialStateInterface } from "../types";

export const GameInitialState: AppInitialStateInterface = {
  isRunning: false,
  player: "",
  difficulty: DifficultyValueEnum.easy,
  config: "",
  counter: 0,
  scores: undefined,
};

export const AppReducer = (state = GameInitialState, action: any) => {
  switch (action.type) {
    case AppConstants.SET_RUNNING_TO:
      return {
        ...state,
        isRunning: !state.isRunning ? true : false,
      };
    case AppConstants.SET_SCORES_TO:
      return {
        ...state,
        scores: action.payload,
      };
    case AppConstants.SET_PLAYER_NAME:
      return {
        ...state,
        player: action.payload,
      };
    case AppConstants.SET_DIFFICULTY_TO:
      return {
        ...state,
        difficulty: action.payload,
      };
    case AppConstants.SET_GAME_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    case AppConstants.SET_COUNTER_TO:
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
