import "./styles/global.scss";
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
  Container,
} from "./AppStyledComponents";
import {
  setGameConfig,
  setPlayerTo,
  setRunningTo,
  setScoresTo,
} from "./store/actions/AppActions";
import { difficultyConfig } from "./utils/DifficultyConfig";
import { DifficultyArr, StylesArr } from "./data/Buttons";
import MenuButton from "./components/atoms/MenuButton";
import { useEffect, useState } from "react";
import { AxiosFetcher } from "./axios/axios";
import { paths } from "./data/Router";

const App = () => {
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AxiosFetcher(paths.scores);
      dispatch(setScoresTo(data));
    };
    if (AppState.scores === undefined) {
      fetchData();
    }
  }, [AppState.scores, dispatch]);

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
      <Container>
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
                return <MenuButton key={index} {...btn} />;
              })}
            </DifficultyButtonDiv>
          </DifficultyDiv>
          <DifficultyDiv>
            <h2>Seleccionar Estilo</h2>
            <DifficultyButtonDiv>
              {StylesArr.map((btn: any, index: number) => {
                return <MenuButton key={index} {...btn} />;
              })}
            </DifficultyButtonDiv>
          </DifficultyDiv>
          <ReduxBtn onClick={() => startGame()}>Empezar Juego</ReduxBtn>
        </NewGameDiv>
      </Container>
    );
  }

  return (
    <Container>
      <CenterDiv>
        <ClassicBoard />
      </CenterDiv>
    </Container>
  );
};

export default App;
