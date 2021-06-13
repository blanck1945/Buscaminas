import { useDispatch, useSelector } from "react-redux";
import { setPlayerTo, setRunningTo } from "../../store/actions/AppActions";
import { AppGlobalState } from "../../store/types";
import { LogoDiv, Nav, NavTitle } from "./NavigationStyledComponents";

const Navigation = () => {
  const dispatch = useDispatch();
  const AppState = useSelector((state: AppGlobalState) => state.app);

  const backToMenu = () => {
    dispatch(setPlayerTo(""));
    dispatch(setRunningTo());
  };

  return (
    <Nav>
      <NavTitle onClick={() => (AppState.isRunning ? backToMenu() : null)}>
        Buscaminas
      </NavTitle>
      <LogoDiv />
    </Nav>
  );
};

export default Navigation;
