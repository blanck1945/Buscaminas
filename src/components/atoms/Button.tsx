import React from "react";
import { useSelector } from "react-redux";
import { AppGlobalState } from "../../store/types";
import { CellState, CellValue, CellValueEnum } from "../../types";
import { ButtonStyled } from "./ButtonStyledComponents";
import CellSpan from "./CellSpan";

interface ButtonProps {
  col: number;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
  red?: boolean;
  row: number;
  state: CellState;
  value: CellValue;
}

const setCellValue = (value: any) => {
  switch (value) {
    case CellValue.bomb:
      return <CellSpan value={CellValueEnum.bomb} />;
    case CellValue.none:
      return null;
    default:
      return value;
  }
};

const Button: React.FC<ButtonProps> = ({
  col,
  onClick,
  onContext,
  red,
  row,
  state,
  value,
}) => {
  const renderContent = () => {
    switch (state) {
      case CellState.visible:
        return setCellValue(value);
      case CellState.flagged:
        return <CellSpan value={CellValueEnum.flag} />;
      default:
        return null;
    }
  };

  const StyledState = useSelector((state: AppGlobalState) => state.styles);

  return (
    <ButtonStyled
      style={{
        backgroundColor:
          StyledState.boardStyle === "classic" ? "#c2c2c2" : "#1FA816",
      }}
      className={`Button ${
        state === CellState.visible ? "visible" : ""
      } value-${value} ${red ? "red" : ""}`}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {renderContent()}
    </ButtonStyled>
  );
};

export default Button;
