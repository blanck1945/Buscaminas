import styled from "styled-components";

export const JungleContainer = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin(theme.mGreen, theme.lGreen);
  }}
  background: ${({ theme }) => theme.dGreen};
  padding: 1.6rem;
  margin-top: 2.5rem;
`;

export const JungleHeaderDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin(theme.lGreen, theme.mGreen);
  }}
  align-items: center;
  background: ${({ theme }) => theme.dGreen};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
`;

export const JungleBodyDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin(theme.lGreen, theme.mGreen);
  }}
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  margin-top: 1.6rem;
`;
