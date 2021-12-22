import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from '../config/firebase/firebase.js';
import { Alert } from "@mui/material";




const theme = createTheme();

export default function Signup() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [country, setCountry] = useState('')
    let [contact, setContact] = useState(0)
    let [errorMsg, setErrorMsg] = useState('')
    let [errorControll, setErrorControll] = useState(false);
    let [compControll, setCompControll] = useState(true)


    const auth = getAuth();
    //database refrence
    let userCollectionRef = collection(db, 'users')

    const navigate = useNavigate()
    let signup = () => {
        let obj = {
            name,
            email,
            password,
            country,
            contact
        }

        
       
            createUserWithEmailAndPassword(auth, obj.email, obj.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    addData()
                    navigate('/')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setErrorControll(true);
                    setErrorMsg(errorMessage)

                    // ..
                });
        


    }


    //add data 
    let addData = async () => {
        await addDoc(userCollectionRef, { name, email, country, contact })
        setName('')
        setEmail('')
        setPassword('')
        setCountry('')
        setContact('')
    }

    return (
        <ThemeProvider theme={theme}  >
            <Container component="main" maxWidth="xs">
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
                        borderRadius:'10px',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#469d89' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    {errorControll ? <Alert severity="error">{errorMsg}</Alert> : null}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="country"
                            label="country"
                            type="text"
                            id="country"
                            autoComplete="current-country"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="contact"
                            label="contact"
                            type="text"
                            id="contact"
                            autoComplete="current-contact"
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            onClick={signup}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2,backgroundColor:'#469d89' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                    Forgot password?
                                </Link> */}
                            </Grid>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"aleady have account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}