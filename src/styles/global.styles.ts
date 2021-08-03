import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    position: relative;
  }

  body {
    min-height: 100vh;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyles