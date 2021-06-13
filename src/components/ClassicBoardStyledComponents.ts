import styled from "styled-components";

export const ContainerDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin("white", "#7b7b7b");
  }}
  background: ${({ theme }) => theme.Greyc2};
  padding: 1.6rem;
  margin-top: 2.5rem;
`;

export const HeaderDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin("#7b7b7b", "white");
  }}
  align-items: center;
  background: ${({ theme }) => theme.Greyc0};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
`;

export const BodyDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin("#7b7b7b", "white");
  }}
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  margin-top: 1.6rem;
`;

export const FaceDiv = styled.div`
  ${({ theme }) => {
    return theme.setBorderMixin("white", "#7b7b7b");
  }}
  ${({ theme }) => {
    return theme.ButtonMixin;
  }}

  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 3.5rem;
  height: 5.2rem;
  justify-content: center;
  width: 5.2rem;
`;
