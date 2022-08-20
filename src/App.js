import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';
import { lightTheme } from './styles/theme';
import Dashboard from './containers/Dashboard';
import Main from './components/Main/Main';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
        <Dashboard/>
        <Main></Main>
    </ThemeProvider>
  );
}

export default App;
