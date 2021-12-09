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
import { Alert } from "@mui/material";

import { getAuth, signInWithEmailAndPassword } from '../config/firebase/firebase.js';
import { useNavigate } from 'react-router';
import loader from '../asset/img/loader3.gif'

const theme = createTheme();





export default function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errorControll, setErrorControll] = useState(false);
    let [errorMsg, setErrorMsg] = useState('')
    const [spinner, setSpinner] = useState(false);





    const navigate = useNavigate()
    const auth = getAuth();





    let login = () => {
        // setTimeout(() => setSpinner(true), 1000)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // setSpinner(false)
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setErrorControll(true);
                setErrorMsg(errorMessage)
            });

    }

    return (
        <>
            {/* {spinner ? <img src={loader} alt='loader' /> : */}

                <ThemeProvider theme={theme} >
                    <Container component="main" maxWidth="xs" >
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: '1px solid lightgrey',
                                padding: '20px',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.21)',
                                backgroundColor:'white',
                                borderRadius:'10px'
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            {errorControll ? <Alert severity="error">{errorMsg}</Alert> : null}
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    onClick={login}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                    </Container>
                </ThemeProvider>
            {/* } */}

        </>
    );
}