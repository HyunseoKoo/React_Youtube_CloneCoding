import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

   * {
    box-sizing: border-box;
   }

   body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    /* padding: 0 13%; */
    background-color: #232222;
    color: white;
    }

    h1,
    h2,
    h3,
    p,
    ul {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--color-text);
    }

    button {
        background-color: transparent;
        outline: 0;
        border: 0;
    }

    button:focus {
        outline: 1px solid var(--color-blue)
    }

    input {
        border: none;
    }
`;

export default GlobalStyles;