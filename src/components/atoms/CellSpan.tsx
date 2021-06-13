import { CellValueEnum } from "../../types";

interface CellSpanInterface {
  value: CellValueEnum;
}

const CellSpan = ({ value }: CellSpanInterface) => {
  switch (value) {
    case "bomb":
      return (
        <span role="img" aria-label="bomb">
          💣
        </span>
      );
    case "flag":
      return (
        <span role="img" aria-label="flag">
          🚩
        </span>
      );
    default:
      return <span></span>;
  }
};

export default CellSpan;
