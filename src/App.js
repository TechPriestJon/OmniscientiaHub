import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ba68c8',
    },
    secondary: {
      main: '#2e7d32',
    },
    info: {
      main: '#ab47bc',
    },
  },
});

function App() {
  return (
    <div>
      <div class="main">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
