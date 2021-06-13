import "./styes/global.scss";
import Input from "./components/atoms/Input";
import ClassicBoard from "./components/ClassicBoard";
import { useDispatch, useSelector } from "react-redux";
import { AppGlobalState } from "./store/types";
import {
  CenterDiv,
  DifficultyButtonDiv,
  DifficultyDiv,
  MainTitle,
  NewGameDiv,
  ReduxBtn,
} from "./AppStyledComponents";
import {
  setGameConfig,
  setPlayerTo,
  setRunningTo,
} from "./store/actions/AppActions";
import { difficultyConfig } from "./utils/DifficultyConfig";
import { DifficultyArr, StylesArr } from "./data/Buttons";
import MenuButton from "./components/atoms/MenuButton";
import { useEffect, useState } from "react";

const App = () => {
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  useEffect(() => {
    setName(AppState.player);
  }, [AppState.player]);

  const startGame = () => {
    if (name.length === 0) {
      setFormError(true);
      return;
    }
    dispatch(setPlayerTo(name));
    dispatch(setGameConfig(difficultyConfig(AppState.difficulty)));
    dispatch(setRunningTo());
  };

  if (!AppState.isRunning) {
    return (
      <NewGameDiv>
        <MainTitle>Menu</MainTitle>
        <Input
          setName={setName}
          setFormError={setFormError}
          formError={formError}
        />
        <DifficultyDiv>
          <h2>Seleccionar Dificultad</h2>
          <DifficultyButtonDiv>
            {DifficultyArr.map((btn: any, index: number) => {
              return <MenuButton {...btn} />;
            })}
          </DifficultyButtonDiv>
        </DifficultyDiv>
        <DifficultyDiv>
          <h2>Seleccionar Estilo</h2>
          <DifficultyButtonDiv>
            {StylesArr.map((btn: any, index: number) => {
              return <MenuButton {...btn} />;
            })}
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
