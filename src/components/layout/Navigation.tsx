import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerTo, setRunningTo } from "../../store/actions/AppActions";
import { AppGlobalState } from "../../store/types";
import ScoreModal from "../atoms/ScoreModal";
import {
  LogoDiv,
  Nav,
  NavTitle,
  ScoreTitlte,
} from "./NavigationStyledComponents";

const Navigation = () => {
  const dispatch = useDispatch();
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const [scoreModal, setScoreModal] = useState<boolean>(false);

  const backToMenu = () => {
    dispatch(setPlayerTo(""));
    dispatch(setRunningTo());
  };

  return (
    <Nav>
      <NavTitle onClick={() => (AppState.isRunning ? backToMenu() : null)}>
        Buscaminas
      </NavTitle>
      <LogoDiv>
        <ScoreTitlte onClick={() => setScoreModal(!scoreModal)}>
          Mejores Puntajes
        </ScoreTitlte>
        {scoreModal ? <ScoreModal /> : null}
      </LogoDiv>
    </Nav>
  );
};

export default Navigation;
