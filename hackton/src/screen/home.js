import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import { Grid,Box } from "@mui/material";
import Navbar_1 from "../componant/navbar/navbar1.js";
import Card_1 from "../componant/card/card1.js";
import Card_2 from "../componant/card/card2.js";


function Home(){

    let [userLogin, setUserLogin] = useState(false)
    let navigate = useNavigate('')


    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in',uid)
                setUserLogin(user.email)
                console.log(user)
            } else {
               console.log('user is sign out ')
               navigate('/login')
            }
        });

    }, [])
    return(
        <div>
           <Navbar_1/>
           <Box sx={{width:'80%',margin:'0 auto'}}>
          <Grid container sx={{margin:'0 auto'}}>
              <Grid item md={3}><Card_1/></Grid>
              <Grid item md={3}><Card_1/></Grid>
              <Grid item md={3}><Card_1/></Grid>
              <Grid item md={3}><Card_1/></Grid>
          </Grid>
          <Grid container sx={{margin:'0 auto'}}>
              <Grid item md={3}><Card_2/></Grid>
              <Grid item md={3}><Card_2/></Grid>
              <Grid item md={3}><Card_2/></Grid>
              <Grid item md={3}><Card_2/></Grid>
          </Grid>
         </Box>
           
        </div>
    )
}

export default Home