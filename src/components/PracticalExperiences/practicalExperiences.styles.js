import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #eee;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;

  .experiences-list {
    padding: 8px 0;
    display: flex;

    .practicals-details {
      width: 100%;
      div {
        margin: 6px 0;
        padding: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid transparent;
      }

      button {
        background-color: #333;
        color: white;
        width: 100%;
        padding: 12px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 5px;
        font-weight: bold;
        font-size: 0.9rem;
        margin-top: 6px;
      }
    }
  }

  form {
    display: flex;
    padding: 8px 0;
    flex-direction: column;

    input {
      margin: 6px 0;
    }
  }
`;
