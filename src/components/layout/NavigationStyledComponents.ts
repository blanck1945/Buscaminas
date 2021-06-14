import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lGrey};
  @media (max-width: 600px) {
    font-size: 0.9rem;
    height: 10rem;
    border-bottom: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const NavTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontTitle};
  cursor: pointer;
  display: inline;
  margin-top: 0.3rem;
  margin-left: 1.5rem;
  margin-right: 0px;

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ScoreTitlte = styled.h4`
  font-size: 2.2rem;
  cursor: pointer;
  margin-top: 2.5rem;
  margin-left: 2rem;

  @media (max-width: 600px) {
    margin-left: auto;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const LogoDiv = styled.div`
  width: 50%;
`;
