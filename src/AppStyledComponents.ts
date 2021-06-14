import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 92.9vh;
  background-color: #24478f;
  padding-top: 5rem;
`;

export const NewGameDiv = styled.div`
  width: 30rem;
  height: 45rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #001a33;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.white};
`;

export const MainTitle = styled.h2`
  padding-top: 0.5rem;
  font-size: ${(props) => props.theme.font3};
  text-align: center;
`;

export const DifficultyDiv = styled.div`
  width: 100%;
  display: flex;
  height: 25%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DifficultyButtonDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ReduxBtn = styled.button`
  width: 50%;
  height: 3.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  margin: auto;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: tomato;
    color: ${({ theme }) => theme.white};
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
`;
