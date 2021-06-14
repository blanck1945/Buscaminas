import * as AppConstants from "../constants/AppConstants";

// -------- App Actions -------------

export const setRunningTo = () => {
  return {
    type: AppConstants.SET_RUNNING_TO,
  };
};

//  -------- Scores Actions -------------

export const setScoresTo = (payload: string) => {
  return {
    type: AppConstants.SET_SCORES_TO,
    payload,
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

//  -------- Player Actions -------------

export const setPlayerTo = (payload: any) => {
  return {
    type: AppConstants.SET_PLAYER_NAME,
    payload,
  };
};
