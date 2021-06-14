import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  min-height: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
`;

export const ErrorSpan = styled.span`
  background-color: tomato;
  color: white;
  font-size: 1.5rem;
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.3rem;
`;

export const HiddenSpan = styled.span`
  visibility: none;
  height: 1.6rem;
`;

export const InputSpan = styled.p`
  font-size: ${(props) => props.theme.font175};
`;

export const InputStyled = styled.input`
  height: 3rem;
`;
