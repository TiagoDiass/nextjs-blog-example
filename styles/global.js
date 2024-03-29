import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0; 
    font-weight: normal;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: #fff;
    background: #191920 url('images/background.svg') no-repeat center top;
  }
    
  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #__next {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
