import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --gray-50: #F3F2F2;
  --gray-100: #DDDCDA;
  --gray-800: #4A4945;
  --gray-900: #1B1A18;

  --orange-500: #DD6B20;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 468px) {
  html {
    font-size: 75%;
  }
}

html, body {
  font-family: "Poppins", sans-serif;
}

body {
  background: var(--gray-900);
  color: var(--gray-50);
}

body,
input,
textarea,
button {
  font-size: 400 1rem "Robot", sans-serif;
}

button {
  cursor: pointer;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.8);
  }
}

a {
  color: inherit;
  text-decoration: none;
}
`;
