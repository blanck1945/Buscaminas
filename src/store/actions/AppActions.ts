import * as AppConstants from "../constants/AppConstants";

// -------- App Actions -------------

export const setRunningTo = () => {
  return {
    type: AppConstants.SET_RUNNING_TO,
  };
};

//  -------- Difficulty Actions -------------

export const setDifficultyTo = (payload: string) => {
  return {
    type: AppConstants.SET_DIFFICULTY_TO,
    payload,
  };
};

//  -------- Game Config Actions -------------

export const setGameConfig = (payload: any) => {
  return {
    type: AppConstants.SET_GAME_CONFIG,
    payload,
  };
};

//  -------- Counter Actions -------------

export const setCounterTo = (payload: any) => {
  return {
    type: AppConstants.SET_COUNTER_TO,
    payload,
  };
};