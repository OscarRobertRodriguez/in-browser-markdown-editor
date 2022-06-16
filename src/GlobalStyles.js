import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  --13px: 0.8125rem;
  --14px: 0.875rem;
  --15px: 0.9375rem;
  --16px: 1rem;
  --17px: 1.0625rem;
  --18px: 1.125rem;
  --19px: 1.1875rem;
  --20px: 1.25rem;
  --21px: 1.3125rem;
  
  
  --black-1-opaque: rgba(21, 22, 25, .5);


  --black-1: hsla(225, 9%, 9%, 1.00);
  --black-2: hsla(216, 8%, 12%, 1.00);
  --black-3: hsla(220, 7%, 18%, 1.00);
  --black-4: hsla(216, 9%, 23%, 1.00);

  --grey-1: hsla(216, 8%, 38%, 1.00);
  --grey-2: hsla(213, 4%, 51%, 1.00);
  --grey-3: hsla(222, 9%, 78%, 1.00);
  --grey-4: hsla(0, 0%, 89%, 1.00);
  --grey-5: hsla(0, 0%, 96%, 1.00);

  --dark-orange: hsla(13, 75%, 58%, 1.00);
  --light-orange: hsla(21, 86%, 67%, 1.00);
  --white: hsla(0, 0%, 100%, 1.00);


  --h1-font-size: 32px;
  --h2-font-size: 28px;
  --h3-font-size: 24px;
  --h4-font-size: 20px;
  --h5-font-size: 16px;
  --h6-font-size: 14px;
  --roboto: 'Roboto' , sans-serif; 


  --bold: 500;
  --bolder: 700;
  --light: 300;
}

#root {
  isolation: isolate;
  
}

html, body, #root {
  height: 100%;
  margin: 0;
  font-family: 'Roboto Slab', sans-serif;
  width:100%;
  overflow-x:hidden;

}


body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}



`;

export default GlobalStyles;
