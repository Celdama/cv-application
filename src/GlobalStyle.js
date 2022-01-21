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
`;
