import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  padding: 20px;
  display: flex;

  h4 {
    margin: 12px 0;
  }
`;

export const HeaderSpace = styled.div`
  color: #fff;
  height: 110px;
  width: 100%;
  padding: 20px;
  background-color: #143e72;
`;

export const MainContent = styled.div`
  background-color: paleturquoise;
  padding: 20px;
  width: 77%;

  .practical-container,
  .educational-container {
    .practical,
    .educational {
      display: flex;
      gap: 20px;

      div {
        p:first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const SideContent = styled.div`
  background-color: palevioletred;
  width: 23%;
  padding: 20px 16px;

  p {
    margin-bottom: 6px;
  }
`;
