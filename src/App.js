import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import MainPage from './MainPage';
import Header from './components/Header';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header check={darkMode} hadleDarkMode={() => setDarkMode(!darkMode)} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
