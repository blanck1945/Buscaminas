import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import GameReducer from "../store/reducers/GameReducers";
import StylesReducer from "../store/reducers/StyleReducer";
import AppReducer from "./reducers/AppReducer";

const reducer = combineReducers({
  app: AppReducer,
  styles: StylesReducer,
  game: GameReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
