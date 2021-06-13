import styled from "styled-components";

export const NewGameDiv = styled.div`
  width: 30rem;
  height: 30rem;
  margin: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  background-color: grey;
  border-radius: 0.4rem;
`;

export const MainTitle = styled.h2`
  font-size: ${(props) => props.theme.font3};
  text-align: center;
  padding-top: 1rem;
`;

export const DifficultyDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const DifficultyButtonDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const DifficultyButton = styled.button`
  width: 25%;
  height: 4rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ReduxBtn = styled.button`
  width: 50%;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: goldenrod;
  cursor: pointer;
  margin: auto;
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
`;
