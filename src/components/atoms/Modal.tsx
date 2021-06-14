import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AxiosFetcher } from "../../axios/axios";
import { paths, Router } from "../../data/Router";
import {
  setPlayerTo,
  setRunningTo,
  setScoresTo,
} from "../../store/actions/AppActions";
import { AppGlobalState } from "../../store/types";
import { GameStateEnum, ScoreType } from "../../types";
import {
  ModalButton,
  ModalDiv,
  HighScoreButton,
} from "./ModalStyledComponents";

interface ModalProps {
  func: any;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ func, closeModal }: ModalProps) => {
  const GameState = useSelector((state: AppGlobalState) => state.game);
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const dispatch = useDispatch();

  const [highScore, setHighScore] = useState<boolean>(false);

  const postNewScore = async () => {
    try {
      const score = {
        time: GameState.time,
        player: AppState.player,
        difficulty: AppState.difficulty,
      };

      const res = await axios({
        method: "POST",
        url: Router.mongoURL + "api/score/create",
        data: score,
      });

      if (res.data.complete) {
        setHighScore(true);
        const data = await AxiosFetcher(Router.mongoURL + paths.scores);
        dispatch(setScoresTo(data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkHighScore = async () => {
    if (AppState.scores[AppState.difficulty].length !== 3) {
      postNewScore();
    }

    const newHighScore = AppState.scores[AppState.difficulty].filter(
      (el: ScoreType) => {
        return el.time > GameState.time ? el : null;
      }
    );

    if (newHighScore.length !== 0) {
      postNewScore();
    }
  };

  useEffect(() => {
    if (GameState.gameState === GameStateEnum.won) {
      setHighScore(false);
      checkHighScore();
    }
  }, [GameState.gameState]);

  const restartGame = () => {
    func();
    closeModal(false);
  };

  const backToMenu = () => {
    dispatch(setPlayerTo(""));
    dispatch(setRunningTo());
  };

  return (
    <ModalDiv>
      {GameState.gameState === GameStateEnum.won ? (
        <h3>{AppState.player} Ganaste</h3>
      ) : (
        <h3>{AppState.player} Intantalo de Nuevo</h3>
      )}
      <div>
        <ModalButton onClick={() => backToMenu()}>Volver al menu</ModalButton>
        <ModalButton onClick={() => restartGame()}>Jugar de nuevo</ModalButton>
        {GameState.gameState === GameStateEnum.won && highScore ? (
          <HighScoreButton>NuEvO MaXiMo PuNtAjE</HighScoreButton>
        ) : null}
      </div>
    </ModalDiv>
  );
};

export default Modal;
