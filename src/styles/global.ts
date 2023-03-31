import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    overflow: -moz-scrollbars-none;
  }
  
  html::-webkit-scrollbar { 
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    background: ${(props) => props.theme.background};
  }

  --webkit-scrollbar {
    display: none;
  }

  body, input, textarea, button, p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
  }

  h1 {
    color: ${(props) => props.theme.title}
  }

`
