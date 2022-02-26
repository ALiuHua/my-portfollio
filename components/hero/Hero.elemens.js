import { Container } from "../../styles/Container.styled";
import styled from "styled-components";

export const HeroContainer = styled(Container)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 65%;

  p {
    font-size: 2rem;
    font-weight: 400;
  }
`;
export const Section = styled.section``;
