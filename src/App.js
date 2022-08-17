import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';
import { lightTheme } from './styles/theme';
import Dashboard from './containers/Dashboard';



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
        <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
