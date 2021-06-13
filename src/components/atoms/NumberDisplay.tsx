import { NumberDisplayDiv } from "./NumberDisplayStylesComponents";

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay = ({ value }: NumberDisplayProps) => {
  return (
    <NumberDisplayDiv>
      {value < 0
        ? `-${Math.abs(value).toString().padStart(2, "0")}`
        : value.toString().padStart(3, "0")}
    </NumberDisplayDiv>
  );
};

export default NumberDisplay;
