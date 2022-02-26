import { css } from "styled-components";

export const AbsolutePositionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// this Mixins was used in Navbar
//import { AbsolutePositionCenter } from "../../styles/Mixins";
//export const NavList = styled.li`
/*${({ position }) =>
position === "absolute" ? AbsolutePositionCenter : null};
padding: 1.2rem 3.2rem;
background-color: transparent;
margin-right: ${({ marginRight }) => marginRight};
`;*/
