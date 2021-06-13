import * as StylesConstants from "../constants/StyleConstans";
import { StylesValuesEnum } from "../../types";
import { StylesInitialStateInterface } from "../types";

export const StylesInitialState: StylesInitialStateInterface = {
  boardStyle: StylesValuesEnum.classic,
};

const StylesReducer = (state = StylesInitialState, action: any) => {
  switch (action.type) {
    case StylesConstants.SET_BOARD_STYLE_TO:
      return {
        ...state,
        boardStyle: action.payload,
      };
    default:
      return state;
  }
};

export default StylesReducer;
