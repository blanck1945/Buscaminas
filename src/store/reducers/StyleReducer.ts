import * as StylesConstants from "../constants/StyleConstans";
import { StylesInitialStateInterface } from "../types";

export const StylesInitialState: StylesInitialStateInterface = {
  boardStyle: "clasic",
};

const StylesReducer = (state = StylesInitialState, action: any) => {
  switch (action.type) {
    case StylesConstants.SET_TO_JUNGLE:
      return {
        ...state,
        boardStyle: "jungle",
      };
    case StylesConstants.SET_TO_CLASSIC:
      return {
        ...state,
        boardStyle: "classic",
      };
    default:
      return state;
  }
};

export default StylesReducer;
