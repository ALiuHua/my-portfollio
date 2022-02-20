import styled from "styled-components";

export const NavContainer = styled.ul`
  height: 300px;
  padding: 8px 18px;
  list-style: none;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.li`
  padding: 2px 4px;
  background-color: transparent;
  margin-right: ${(props) => props.marginRight};
`;
export const NavLink = styled.a`
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 600;

  &:hover,
  &:active {
    border-bottom: 2px solid #fff;
  }
`;
