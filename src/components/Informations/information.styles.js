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
    flex-wrap: wrap;
  }
`;

export const EditCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
  background-color: palevioletred;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  .btn-container {
    display: flex;
    flex-direction: column;
    background-color: #eee;
    justify-content: center;
    width: 100%;
    padding: 20px;

    .edit-mode-btn,
    .generate-pdf-btn {
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

    .generate-pdf-btn {
      background-color: #43aa8b;
      margin-top: 12px;
    }
  }
`;

export const PreviewCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
`;
