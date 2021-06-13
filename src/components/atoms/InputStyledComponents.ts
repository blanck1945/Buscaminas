import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const InputSpan = styled.p`
  font-size: ${(props) => props.theme.font175};
`;

export const InputStyled = styled.input`
  height: 3rem;
`;
