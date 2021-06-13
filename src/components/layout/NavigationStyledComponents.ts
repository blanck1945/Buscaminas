import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  border-bottom: 1px solid ${({ theme }) => theme.lGrey};
`;

export const NavTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontTitle};
  margin-left: 3rem;
  cursor: pointer;
  display: inline;
`;

export const LogoDiv = styled.div`
  width: 50%;
  background-color: red;
`;
