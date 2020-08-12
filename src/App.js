import React from 'react';
import logo from './star.png';
import lightTheme from './themes/light';
import * as S from './styles.js';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container>
        <S.Header>
          
          <S.Img src={logo} alt="logo"></S.Img>
          
          <S.p>
            Edit src/App.js and save to reload.
          </S.p>

        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
