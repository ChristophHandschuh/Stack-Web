import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";

axios.defaults.withCredentials = true;

const theme = createTheme();

const SignIn = ({ setIsLoggedIn })  => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noUser, setNoUser] = useState(false);
  
  const login = () => {
    axios.post('http://localhost:3001/login', {username: username, password: password})
          .then((response) => {
            console.log(response);
            if(response.data.loggedIn === true){
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                setNoUser(true);
            }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              autoFocus
              onChange={(e) => {setUsername(e.target.value)}}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              autoFocus
              onChange={(e) => {setPassword(e.target.value)}}
            />
            {noUser && <Typography variant="h8">No user with this password exists</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={ login }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;