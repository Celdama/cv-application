import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #333;
    --white: #fff;
    --medWhite: #e9eced;
    --green: #43aa8b;
    --red: #f94144;
    --orange: #f8961e;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 0.9rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
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
      background-color: var(--black);
      border: 1px solid transparent;
      border-radius: 5px;
      color: var(--white);
      font-weight: bold;
      font-size: .9rem;
      margin-top: 6px;
    }

  }
`;
