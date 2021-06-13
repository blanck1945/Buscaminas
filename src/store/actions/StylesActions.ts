import * as StylesConstants from "../constants/StyleConstans";
import { StylesValuesEnum } from "../../types";

//  -------- Board Styles Actions -------------

export const setBoardStyleTo = (payload: StylesValuesEnum) => {
  return {
    type: StylesConstants.SET_BOARD_STYLE_TO,
    payload,
  };
};
