import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > ul,
  & > div {
    flex: 1;
  }
`;
