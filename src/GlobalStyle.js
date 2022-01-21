import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }

  .App {
    /* outline: 1px solid red; */
  }

  .bold {
    font-weight: bold;
  }

  .mb-4 {
    margin-bottom: 4px;
  }

  .mb-6 {
    margin-bottom: 6px;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  form {
    display: flex;
    padding: 8px 0;
    flex-direction: column;

    input {
      margin: 6px 0;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid transparent;
    }

    textarea {
      padding: 0.5rem;
      height: 82px;
      border-radius: 5px;
      border: 1px solid transparent;
      margin: 6px 0 ;
    }

    button {
      padding: 12px;
      cursor: pointer;
      background-color: #333;
      border: 1px solid transparent;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: .9rem;
      margin-top: 6px;
    }

  }
`;
