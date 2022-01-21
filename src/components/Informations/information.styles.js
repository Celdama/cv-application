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

  .btn-container {
    display: flex;
    background-color: #eee;
    justify-content: center;
    width: 100%;
    padding: 20px;

    .edit-mode-btn {
      width: 100%;
      padding: 12px;
      cursor: pointer;
      background-color: #e76f51;
      border-radius: 5px;
      border: 1px solid transparent;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;

export const PreviewCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
`;
