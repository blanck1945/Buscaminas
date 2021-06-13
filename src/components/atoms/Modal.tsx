import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerTo, setRunningTo } from "../../store/actions/AppActions";
import { AppGlobalState } from "../../store/types";
import { GameStateEnum } from "../../types";
import { ModalButton, ModalDiv } from "./ModalStyledComponents";

interface ModalProps {
  func: any;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ func, closeModal }: ModalProps) => {
  const GameState = useSelector((state: AppGlobalState) => state.game);
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const dispatch = useDispatch();

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
      </div>
    </ModalDiv>
  );
};

export default Modal;
