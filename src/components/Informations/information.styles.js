import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 20px;
  height: 100%;
`;

export const Content = styled.div`
  main {
    display: flex;
    padding: 90px 0;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .popover {
    position: absolute;
    /* bottom: 30%;
    left: 60%; */
    z-index: 2;
  }

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
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
    .generate-pdf-btn,
    .reset-btn {
      width: 100%;
      padding: 12px;
      cursor: pointer;
      background-color: #43aa8b;

      border-radius: 5px;
      border: 1px solid transparent;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .edit-mode-btn {
      background-color: #f8961e;
      margin: 12px 0;
    }

    .reset-btn {
      background-color: #f94144;
    }
  }
`;

export const PreviewCvInfo = styled.div`
  width: 790px;
  min-width: 736px;
`;
