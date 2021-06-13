import React from "react";
import {
  ErrorSpan,
  HiddenSpan,
  InputDiv,
  InputSpan,
  InputStyled,
} from "./InputStyledComponents";

interface InputProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setFormError: React.Dispatch<React.SetStateAction<boolean>>;
  formError: boolean;
}

const Input = ({ setName, setFormError, formError }: InputProps) => {
  const handlerInput = (event: any) => {
    setFormError(false);
    setName(event.target.value);
  };

  return (
    <InputDiv>
      <InputSpan>Escriba Su Nombre</InputSpan>
      <InputStyled onChange={(event) => handlerInput(event)} />
      {formError ? (
        <ErrorSpan>Por favor ingrese su nombre</ErrorSpan>
      ) : (
        <HiddenSpan></HiddenSpan>
      )}
    </InputDiv>
  );
};

export default Input;
