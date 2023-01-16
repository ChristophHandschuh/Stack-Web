import { ColorModeContext, useMode } from './theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learn from "./scenes/learn";
import Sidebar from './scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from './scenes/home';
import Library from './scenes/library';
import SignIn from './scenes/login';
import React, { useEffect, useState, useMemo } from 'react';
import axios from "axios";
import { Box } from '@mui/system';
import { StoreProvider } from 'easy-peasy';
import store from './Store';

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    async function checkLoginStatus() {
      const response = await axios.get("http://localhost:3001/login");
      console.log(response);
      setIsLoggedIn(response.data.loggedIn);
    }
    checkLoginStatus();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreProvider store={store}>
      <div className="app">
        <Router>
        {isLoggedIn && <Sidebar />}
          <main className="content">
              <Routes>
                  <Route exact path="/" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Home/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
                  <Route path="/library" element={ <Library /> } />
                  <Route path="/library/:id" element={ <Library /> } />
              </Routes>
          </main>
        </Router>
      </div>
      </StoreProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;