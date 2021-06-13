import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppGlobalState } from "../../store/types";
import { GameStateEnum } from "../../types";

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 7rem;
  z-index: 5;
  background-color: #808080cc;
  font-size: 9rem;
`;

const Modal = () => {
  const GameState = useSelector((state: AppGlobalState) => state.game);

  console.log(GameState.gameState);
  return (
    <ModalDiv>
      {GameState.gameState === GameStateEnum.won
        ? "Ganaste"
        : "Intantalo de Nuevo"}
    </ModalDiv>
  );
};

export default Modal;
