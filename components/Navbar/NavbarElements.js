import styled from "styled-components";
import { AbsolutePositionCenter } from "../../styles/Mixins";
export const HeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  padding: 0.8rem 1.8rem;
`;
export const NavContainer = styled.ul`
  position: relative;
  width: 100%;
  padding: 0.8rem 1.8rem;
  list-style: none;
  background-color: ${({ theme }) => theme.primaryColor};

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
  color: ${(props) => props.color};
  font-size: 2rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  &:link,
  &:visited {
  }
  &:hover,
  &:active {
    margin-bottom: -3.5px;
    border-bottom: 3.5px solid ${({ theme }) => theme.accentColor};
  }
`;

export const SocialIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  display: inlin-block;
  margin-right: 0.5rem;
`;
export const NavLogo = styled.img`
  width: 5rem;
  height: 5rem;
  &:hover {
    transform: scale(1.2);
    margin-bottom: 0;
    border-bottom: none;
  }
`;
