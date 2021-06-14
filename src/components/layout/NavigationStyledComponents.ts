import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lGrey};
`;

export const NavTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontTitle};
  cursor: pointer;
  display: inline;
  width: 50%;
  margin-right: 3rem;
  text-align: end;
`;

export const ScoreTitlte = styled.h4`
  font-size: 2.2rem;
  cursor: pointer;
  width: 20%;
  margin-top: 2.5rem;
  margin-left: 2rem;
`;

export const LogoDiv = styled.div`
  width: 50%;
`;
