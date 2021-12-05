import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import Navbar_1 from "../componant/navbar/navbar1.js";
import Card_1 from "../componant/card/card1.js";
import { Grid } from "@mui/material";


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
          <Grid container>
              <Grid item md={3}><Card_1/></Grid>
              <Grid item md={3}><Card_1/></Grid>
              <Grid item md={3}><Card_1/></Grid>
          </Grid>
         
           
        </div>
    )
}

export default Home