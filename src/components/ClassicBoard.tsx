import React, { useEffect, useState } from "react";

import Button from "./atoms/Button";
import NumberDisplay from "./atoms/NumberDisplay";
import { generateCells, openMultipleCells } from "../utils";
import {
  Cell,
  CellState,
  CellValue,
  DifficultyValueEnum,
  GameStateEnum,
  StylesValuesEnum,
} from "../types";

import { useDispatch, useSelector } from "react-redux";
import { AppGlobalState } from "../store/types";
import {
  setBombsCounterTo,
  setCellsTo,
  setGameStateTo,
  setTimeTo,
} from "../store/actions/GameActions";
import {
  ContainerDiv,
  FaceDiv,
  HeaderDiv,
} from "./ClassicBoardStyledComponents";
import { difficultyConfig } from "../utils/DifficultyConfig";
import styled from "styled-components";
import Modal from "./atoms/Modal";
import {
  JungleContainer,
  JungleHeaderDiv,
} from "./boardStyles/JungleStyledComponents";

const setColumns = (ref: string) => {
  switch (ref) {
    case DifficultyValueEnum.normal:
      return 12;
    case DifficultyValueEnum.hard:
      return 16;
    default:
      return 9;
  }
};

const ClassicBoard = () => {
  const GameState = useSelector((state: AppGlobalState) => state.game);
  const AppState = useSelector((state: AppGlobalState) => state.app);
  const StyleState = useSelector((state: AppGlobalState) => state.styles);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const BodyDiv = styled.div`
    ${({ theme }) => {
      return theme.setBorderMixin("#7b7b7b", "white");
    }}
    display: grid;
    grid-template-columns: repeat(${setColumns(AppState.difficulty)}, 1fr);
    grid-template-rows: repeat(${setColumns(AppState.difficulty)}, 1fr);
    margin-top: 1.6rem;
  `;

  const JungleBodyDiv = styled.div`
    ${({ theme }) => {
      return theme.setBorderMixin(theme.lGreen, theme.mGreen);
    }}
    display: grid;
    grid-template-columns: repeat(${setColumns(AppState.difficulty)}, 1fr);
    grid-template-rows: repeat(${setColumns(AppState.difficulty)}, 1fr);
    margin-top: 1.6rem;
  `;

  useEffect(() => {
    const handleMouseDown = (): void => {
      //dispatch(setFaceToOh());
    };

    const handleMouseUp = (): void => {
      //dispatch(setFaceToSmile());
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dispatch]);

  useEffect(() => {
    if (GameState.gameState === GameStateEnum.live && GameState.time < 999) {
      const timer = setInterval(() => {
        dispatch(setTimeTo(GameState.time + 1));
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [dispatch, GameState.gameState, GameState.time]);

  useEffect(() => {
    if (GameState.gameState === GameStateEnum.lost) {
      //dispatch(setFaceToLost());
    }
  }, [dispatch, GameState.gameState]);

  useEffect(() => {
    if (GameState.gameState === GameStateEnum.won) {
      //dispatch(setFaceToWin());
    }
  }, [dispatch, GameState.gameState]);

  const handleCellClick = (rowParam: any, colParam: any) => (): void => {
    let newCells = GameState.cells.slice();

    // start the game
    if (GameState.gameState === GameStateEnum.none) {
      let isABomb = newCells[rowParam][colParam].value === CellValue.bomb;
      while (isABomb) {
        newCells = generateCells(difficultyConfig(AppState.difficulty));
        if (newCells[rowParam][colParam].value !== CellValue.bomb) {
          isABomb = false;
          break;
        }
      }
    }
    dispatch(setGameStateTo(GameStateEnum.live));

    const currentCell = newCells[rowParam][colParam];

    if ([CellState.flagged, CellState.visible].includes(currentCell.state)) {
      return;
    }

    if (currentCell.value === CellValue.bomb) {
      dispatch(setGameStateTo(GameStateEnum.lost));
      setModal(true);
      newCells[rowParam][colParam].red = true;
      newCells = showAllBombs();
      dispatch(setCellsTo(newCells));
      return;
    } else if (currentCell.value === CellValue.none) {
      newCells = openMultipleCells(
        difficultyConfig(AppState.difficulty),
        newCells,
        rowParam,
        colParam
      );
    } else {
      newCells[rowParam][colParam].state = CellState.visible;
    }

    // Check to see if you have won
    let safeOpenCellsExists = false;

    for (let row = 0; row < AppState.config.MAX_ROWS; row++) {
      for (let col = 0; col < AppState.config.MAX_COLS; col++) {
        const currentCell = newCells[row][col];

        if (
          currentCell.value !== CellValue.bomb &&
          currentCell.state === CellState.open
        ) {
          safeOpenCellsExists = true;
          break;
        }
      }
    }

    if (!safeOpenCellsExists) {
      newCells = newCells.map((row: any) =>
        row.map((cell: any) => {
          if (cell.value === CellValue.bomb) {
            return {
              ...cell,
              state: CellState.flagged,
            };
          }
          return cell;
        })
      );
      dispatch(setGameStateTo(GameStateEnum.won));
      setModal(true);
    }
    dispatch(setCellsTo(newCells));
  };

  const handleCellContext =
    (rowParam: number, colParam: number) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      e.preventDefault();

      if (GameState.gameState === GameStateEnum.none) {
        return;
      }

      const currentCells = GameState.cells.slice();
      const currentCell = GameState.cells[rowParam][colParam];

      if (currentCell.state === CellState.visible) {
        return;
      } else if (
        currentCell.state === CellState.open &&
        GameState.bombCounter !== 0
      ) {
        currentCells[rowParam][colParam].state = CellState.flagged;
        dispatch(setBombsCounterTo(GameState.bombCounter - 1));
      } else if (currentCell.state === CellState.flagged) {
        currentCells[rowParam][colParam].state = CellState.open;
        dispatch(setBombsCounterTo(GameState.bombCounter + 1));
      }
    };

  const handleFaceClick = (): void => {
    dispatch(setBombsCounterTo(10));
    dispatch(setCellsTo(generateCells(difficultyConfig(AppState.difficulty))));
    dispatch(setGameStateTo(GameStateEnum.none));
    setCounter(0);
  };

  const renderCells = () => {
    if (counter === 0) {
      dispatch(
        setCellsTo(generateCells(difficultyConfig(AppState.difficulty)))
      );
      dispatch(setTimeTo(0));
      dispatch(setBombsCounterTo(AppState.config.NO_OF_BOMBS));
      dispatch(setGameStateTo(GameStateEnum.none));
      setCounter(1);
    }

    return GameState.cells.map((row: any, rowIndex: any) =>
      row.map((cell: any, colIndex: any) => (
        <Button
          col={colIndex}
          key={`${rowIndex}-${colIndex}`}
          onClick={handleCellClick}
          onContext={handleCellContext}
          red={cell.red}
          row={rowIndex}
          state={cell.state}
          value={cell.value}
        />
      ))
    );
  };

  const showAllBombs = (): Cell[][] => {
    const currentCells = GameState.cells.slice();
    return currentCells.map((row: any) =>
      row.map((cell: any) => {
        if (cell.value === CellValue.bomb) {
          return {
            ...cell,
            state: CellState.visible,
          };
        }

        return cell;
      })
    );
  };

  return (
    <>
      {modal ? <Modal func={handleFaceClick} closeModal={setModal} /> : null}
      {StyleState.boardStyle === StylesValuesEnum.classic ? (
        <ContainerDiv>
          <HeaderDiv>
            <NumberDisplay value={GameState.bombCounter} />
            <FaceDiv onClick={handleFaceClick}>
              <span role="img" aria-label="face">
                {GameState.face}
              </span>
            </FaceDiv>
            <NumberDisplay value={GameState.time} />
          </HeaderDiv>
          <BodyDiv>{renderCells()}</BodyDiv>
        </ContainerDiv>
      ) : (
        <JungleContainer>
          <JungleHeaderDiv>
            <NumberDisplay value={GameState.bombCounter} />
            <FaceDiv onClick={handleFaceClick}>
              <span role="img" aria-label="face">
                {GameState.face}
              </span>
            </FaceDiv>
            <NumberDisplay value={GameState.time} />
          </JungleHeaderDiv>
          <JungleBodyDiv>{renderCells()}</JungleBodyDiv>
        </JungleContainer>
      )}
    </>
  );
};

export default ClassicBoard;
