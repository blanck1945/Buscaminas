import styled from "styled-components";

export const ScoreBoard = styled.div`
  background-color: #24478f;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;
  top: 7rem;
  padding-top: 5rem;
`;

export const ScoreTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
  padding-top: 1rem;
`;

export const ScoreColumn = styled.div`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 3rem;
`;

export const ScoreHeader = styled.p`
  font-size: 1.8rem;
  margin: auto;
  width: 100%;
  height: 3rem;
  padding-top: 0.5rem;
  border: 1px solid white;
  padding-left: 0.3rem;
  color: ${({ theme }) => theme.white};
`;

export const ScoreGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 3% 10% 10% 10%;
`;

export const LoadingP = styled.p`
  font-size: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
`;
