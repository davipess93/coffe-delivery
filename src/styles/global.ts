import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
  }
`
