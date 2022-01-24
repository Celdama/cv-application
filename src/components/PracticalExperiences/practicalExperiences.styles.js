import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);

  .experiences-list {
    padding: 8px 0;
    display: flex;
    flex-direction: column;

    .practicals-details {
      width: 100%;
      div {
        margin: 6px 0;
        padding: 0.5rem;
        background-color: var(--white);
        border-radius: 5px;
        border: 1px solid transparent;
      }

      button {
        background-color: var(--black);
        color: var(--white);
        width: 100%;
        padding: 12px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 5px;
        font-weight: bold;
        font-size: var(--fontSmall);
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
