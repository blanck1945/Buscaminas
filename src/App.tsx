import "./styes/global.scss";
import Input from "./components/atoms/Input";
import ClassicBoard from "./components/ClassicBoard";
import { useDispatch, useSelector } from "react-redux";
import { AppGlobalState } from "./store/types";
import {
  CenterDiv,
  DifficultyButton,
  DifficultyButtonDiv,
  DifficultyDiv,
  MainTitle,
  NewGameDiv,
  ReduxBtn,
} from "./AppStyledComponents";
import {
  setDifficultyTo,
  setGameConfig,
  setRunningTo,
} from "./store/actions/AppActions";
import { DifficultyValueEnum } from "./types";
import { useState } from "react";

const App = () => {
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<string>(AppState.difficulty);

  const setDifficulty = (value: string) => {
    dispatch(setDifficultyTo(value));
    setSelected(value);
  };

  const gameConfig = (difficult: string) => {
    switch (difficult) {
      case DifficultyValueEnum.normal:
        return {
          MAX_ROWS: 12,
          MAX_COLS: 12,
          NO_OF_BOMBS: 14,
        };
      case DifficultyValueEnum.hard:
        return {
          MAX_ROWS: 18,
          MAX_COLS: 18,
          NO_OF_BOMBS: 20,
        };
      default:
        return {
          MAX_ROWS: 9,
          MAX_COLS: 9,
          NO_OF_BOMBS: 10,
        };
    }
  };

  const startGame = () => {
    dispatch(setGameConfig(gameConfig(AppState.difficulty)));
    dispatch(setRunningTo());
  };

  if (!AppState.isRunning) {
    return (
      <NewGameDiv>
        <MainTitle>Buscaminas</MainTitle>
        <Input />
        <DifficultyDiv>
          <h2>Seleccionar Dificultad</h2>
          <DifficultyButtonDiv>
            <DifficultyButton
              style={{
                backgroundColor:
                  selected === DifficultyValueEnum.easy ? "blue" : "grey",
              }}
              onClick={() => setDifficulty(DifficultyValueEnum.easy)}
            >
              Facil
            </DifficultyButton>
            <DifficultyButton
              style={{
                backgroundColor:
                  selected === DifficultyValueEnum.normal ? "blue" : "grey",
              }}
              onClick={() => setDifficulty(DifficultyValueEnum.normal)}
            >
              Normal
            </DifficultyButton>
            <DifficultyButton
              style={{
                backgroundColor:
                  selected === DifficultyValueEnum.hard ? "blue" : "grey",
              }}
              onClick={() => setDifficulty(DifficultyValueEnum.hard)}
            >
              Dificil
            </DifficultyButton>
          </DifficultyButtonDiv>
        </DifficultyDiv>
        <ReduxBtn onClick={() => startGame()}>Empezar Juego</ReduxBtn>
      </NewGameDiv>
    );
  }

  return (
    <div>
      <CenterDiv>
        <ClassicBoard />
      </CenterDiv>
    </div>
  );
};

export default App;
