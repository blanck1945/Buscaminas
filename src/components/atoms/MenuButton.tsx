import { useDispatch, useSelector } from "react-redux";
import { setDifficultyTo } from "../../store/actions/AppActions";
import { setBoardStyleTo } from "../../store/actions/StylesActions";
import { AppGlobalState } from "../../store/types";
import { DifficultyValueEnum, StylesValuesEnum } from "../../types";
import styled from "styled-components";

export const DifficultyButton = styled.button`
  width: 25%;
  height: 4rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface MenuButtonProps {
  type: string;
  refValue: DifficultyValueEnum | StylesValuesEnum | any;
  content: string;
}

const MenuButton = ({ type, refValue, content }: MenuButtonProps) => {
  const dispatch = useDispatch();
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const StylesState = useSelector((state: AppGlobalState) => state.styles);

  switch (type) {
    case "difficulty":
      return (
        <DifficultyButton
          style={{
            color: AppState.difficulty === refValue ? "white" : "black",
            backgroundColor:
              AppState.difficulty === refValue ? "#204060" : "#d1e0e0",
          }}
          onClick={() => dispatch(setDifficultyTo(refValue))}
        >
          {content}
        </DifficultyButton>
      );
    default:
      return (
        <DifficultyButton
          style={{
            color: StylesState.boardStyle === refValue ? "white" : "black",
            backgroundColor:
              StylesState.boardStyle === refValue ? "#204060" : "#d1e0e0",
          }}
          onClick={() => dispatch(setBoardStyleTo(refValue))}
        >
          {content}
        </DifficultyButton>
      );
  }
};

export default MenuButton;
