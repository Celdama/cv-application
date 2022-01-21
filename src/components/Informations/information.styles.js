import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 20px;
  height: 100%;
`;

export const Content = styled.div`
  main {
    display: flex;
    padding: 40px 0;
    justify-content: center;
    gap: 20px;
    outline: 1px solid red;
    flex-wrap: wrap;
  }
`;

export const EditCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
  background-color: palevioletred;
`;

export const PreviewCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
`;
