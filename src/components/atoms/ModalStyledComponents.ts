import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 7rem;
  z-index: 5;
  background-color: #808080cc;
  font-size: 9rem;
`;

export const ModalButton = styled.button`
  width: 10rem;
  margin-left: 3rem;
  height: 4rem;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.lGrey};
  border-radius: 0.4rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.lGreen};
    transition: all 0.2s ease-in-out;
  }
`;

export const HighScoreButton = styled.button`
  width: 15rem;
  margin-left: 3rem;
  height: 6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  background: #428bca;
  color: #fff;
  text-transform: uppercase;

  @keyframes changeColor {
    from {
      background-color: #00a0d6;
      color: white;
    }
    to {
      background-color: #c2c2c2;
      color: black;
    }
  }

  animation: changeColor 4s infinite alternate;
`;
