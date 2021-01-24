import styled, { createGlobalStyle } from 'styled-components';
import YesevaOne from '../fonts/YesevaOne-Regular.ttf';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


  @font-face {
    font-family: "Yeseva One";
    src: url(${YesevaOne});
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: #1C1C1C;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Yeseva One", georgia, serif;
  }
  
  h1 {
    font-size: 4.5rem;
  }
  
  h2 {
    font-size: 2.9rem;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
  
  section {
    padding: 5rem 0;
  }
  
  button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;
    
    :active, :focus {
      outline: none;
    }
  }
  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 133rem;
  padding: 0 2.4rem;
  margin: 0 auto;
`;

export default GlobalStyle;
