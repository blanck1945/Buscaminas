import { useSelector } from "react-redux";
import { AppGlobalState } from "../../store/types";
import {
  LoadingP,
  ScoreBoard,
  ScoreColumn,
  ScoreGrid,
  ScoreHeader,
  ScoreTitle,
} from "./ScoreModalStyledComponents";

const ScoreModal = () => {
  const AppState = useSelector((state: AppGlobalState) => state.app);

  const ScoreTable = (header: string, dataToMap: any) => {
    return (
      <ScoreColumn>
        <ScoreTitle>{header}</ScoreTitle>
        <ScoreGrid>
          <ScoreHeader>Pos</ScoreHeader>
          <ScoreHeader>Jugador</ScoreHeader>
          <ScoreHeader>Tiempo</ScoreHeader>
          <ScoreHeader>Dificultad</ScoreHeader>
        </ScoreGrid>
        {dataToMap.map((el: any, index: number) => {
          return (
            <ScoreGrid key={index}>
              <ScoreHeader>{index + 1}</ScoreHeader>
              <ScoreHeader>{el.player}</ScoreHeader>
              <ScoreHeader>{el.time}</ScoreHeader>
              <ScoreHeader>{el.difficulty}</ScoreHeader>
            </ScoreGrid>
          );
        })}
      </ScoreColumn>
    );
  };

  return (
    <ScoreBoard>
      {AppState.scores ? (
        <>
          <ScoreColumn>
            {AppState?.scores?.easy
              ? ScoreTable("Facil", AppState.scores.easy)
              : null}
          </ScoreColumn>
          <ScoreColumn>
            {AppState?.scores?.normal
              ? ScoreTable("Normal", AppState.scores.normal)
              : null}
          </ScoreColumn>
          <ScoreColumn>
            {AppState?.scores?.hard
              ? ScoreTable("Dificil", AppState.scores.hard)
              : null}
          </ScoreColumn>
        </>
      ) : (
        <LoadingP>Cargando...</LoadingP>
      )}
    </ScoreBoard>
  );
};

export default ScoreModal;
