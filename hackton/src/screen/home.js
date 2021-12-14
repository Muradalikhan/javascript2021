import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import { Grid, Box } from "@mui/material";
import Navbar1 from "../componant/navbar/navbar1.js";
import Card1 from "../componant/card/card1.js";
// import Card2 from "../componant/card/card2.js";
import Navbar2 from "../componant/navbar/navbar2.js";


function Home() {

    let [userLogin, setUserLogin] = useState(false)
    let navigate = useNavigate('')


    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in', uid)
                setUserLogin(user.email)
                console.log(userLogin)
                console.log(user)
            } else {
                console.log('user is sign out ')
                navigate('/login')
            }
        });

    }, [])
    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <Box sx={{ width: '80%', margin: '0 auto' }}>
                <Grid container sx={{ margin: '0 auto' }}>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                </Grid>
                <Grid container sx={{ margin: '0 auto' }}>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                    <Grid item  sm={5} md={4} lg={3}><Card1 /></Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default Home