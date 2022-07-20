import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap');

  html {
    --color-primary: #7C5DFA;
    --color-secondary: #252945;
    --color1: #373B53;
    --color2: #1E2139;
    --color3: #DFE3FA;
    --color4: #888EB0;
    --color5: #7E88C3;
    --color6: #0C0E16;
    --color7: #EC5757;
    --color8: #FF9797;
    --color-background: #F8F8FB;
    --color10: #141625;
    --font-large_xl: 2rem;
    --font-large: 1.25rem;
    --font-medium: 1rem;
    --font-small: 0.75rem;
  }

  button {
    cursor: pointer;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'League Spartan', sans-serif;
}
`
