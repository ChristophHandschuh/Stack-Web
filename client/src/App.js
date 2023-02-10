import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learn from "./scenes/learn";
import Sidebar from './scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from './scenes/home';
import Library from './scenes/library';
import SignIn from './scenes/login';
import Create from './scenes/create';
import React, { useEffect, useState, useMemo } from 'react';
import axios from "axios";
import { Box } from '@mui/system';
import { StoreProvider } from 'easy-peasy';
import store from './Store';
import { useTheme } from "@emotion/react";
import theme from "./theme";

function App() {
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
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreProvider store={store}>
      <div className="app">
        <Router>
        {isLoggedIn && <Sidebar />}
          <main className="content">
              <Routes>
                  <Route exact path="/" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Home/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
                  <Route path="/library" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Library/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
                  <Route path="/library/:id" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Library/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
                  <Route path="/create/:id" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Create/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
                  <Route path="/learn/:id" element={isLoggedIn === null ? (<Box />) : isLoggedIn ? (<Learn/>) : (<SignIn setIsLoggedIn={setIsLoggedIn }/>)} />
              </Routes>
          </main>
        </Router>
      </div>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;