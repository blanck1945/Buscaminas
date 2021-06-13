import { useDispatch, useSelector } from "react-redux";
import { setRunningTo } from "../../store/actions/AppActions";
import { AppGlobalState } from "../../store/types";
import { LogoDiv, Nav, NavTitle } from "./NavigationStyledComponents";

const Navigation = () => {
  const dispatch = useDispatch();
  const AppState = useSelector((state: AppGlobalState) => state.app);

  return (
    <Nav>
      <NavTitle
        onClick={() => (AppState.isRunning ? dispatch(setRunningTo()) : null)}
      >
        Buscaminas
      </NavTitle>
      <LogoDiv />
    </Nav>
  );
};

export default Navigation;
