import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #eee;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;

  form {
    display: flex;
    padding: 8px 0;
    flex-direction: column;

    input {
      margin: 6px 0;
    }
  }
`;
