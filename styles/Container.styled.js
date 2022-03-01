import styled from "styled-components";

export const Container = styled.div`
  text-align: ${({ textAlign }) => textAlign};
  max-width: 100%;
  margin: ${({ margin }) => margin} auto;
`;
