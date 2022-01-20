import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 20px;
`;

export const Content = styled.div`
  outline: 1px solid blue;
  display: flex;
  justify-content: center;
  gap: 20px;
  /* justify-content: space-around; */

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EditCvInfo = styled.div`
  outline: 1px solid red;
  background-color: palegoldenrod;
  max-width: 790px;
`;

export const PreviewCvInfo = styled.div`
  background-color: palegreen;
  max-width: 790px;
  min-width: 780px;
  flex: 1 1 auto;
`;
