import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);

  form {
    display: flex;
    padding: 8px 0;
    flex-direction: column;

    input {
      margin: 6px 0;
    }
  }
`;
