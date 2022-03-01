import styled from "styled-components";
import { AbsolutePositionCenter } from "../../styles/Mixins";
export const HeaderContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 8rem;
  padding: 0.8rem 1.8rem;
  display: flex;
`;
export const NavContainer = styled.ul`
  position: relative;
  width: 100%;
  padding: 0.8rem 1.8rem;
  list-style: none;
  background-color: ${({ theme }) => theme.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.li`
  ${({ position }) =>
    position === "absolute" ? AbsolutePositionCenter : null};
  padding: 1.2rem 3.2rem;
  background-color: transparent;
  margin-right: ${({ marginRight }) => marginRight};
`;
export const NavLink = styled.a`
  display: flex;
  align-items: center;
  &:link,
  &:visited {
  }
  &:hover,
  &:active {
    margin-bottom: -3.5px;
    border-bottom: 3.5px solid ${({ theme }) => theme.btnHover};
  }
  // &.active {
  //   color: red;
  // }
  //create active style for the page router
`;
export const Logo = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  a:hover {
    margin-bottom: 0;
    border-bottom: none;
  }
  &:hover {
    transform: scale(1.2);
    margin-bottom: 0;
    border-bottom: none;
  }
`;
export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  svg {
    &:not(:last-child) {
      margin-right: 0.8%;
    }
  }
`;
