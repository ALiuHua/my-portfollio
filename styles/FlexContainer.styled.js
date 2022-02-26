import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => (layout ? layout : "row")};
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8rem;
  }
  img {
    display: block;
    width: 80%;
  }
  & > ul,
  & > div {
    flex: 1;
  }
  //Styled-components 仍然可以识别styled tag 后面的元素，例如我们定义了ImageWrappper（div）； ImageWrapper仍然能被style flex：1；
`;
