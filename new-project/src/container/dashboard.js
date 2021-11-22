import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from 'react';
import { Button } from '../config/CustomeImportMui'
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";
import Leftbar from "./leftbar";
import Post from "./post";
import Right from "./rightbar";
import Navbar from "./nav";
import Crud from "./crud";
import { getAuth, onAuthStateChanged } from '../config/firebase'






function DashBoard() {
    let [userLogin, setUserLogin] = useState(false)
    let navigate = useNavigate('')



    let theme = useTheme();
    const useStyles = makeStyles(() => ({
        button: {
            width: 200,
            backgroundColor: 'red',
            display: 'block',
            '&:hover': {
                fontSize: '20px'
            },
            [theme.breakpoints.down('md')]: {
                width: 110,
                display: 'block',
            },
        },
        hideGrid: {
            display: 'block',
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
            [theme.breakpoints.down('xsm')]: {
                display: 'none',
            },
        },
        header: {
            color: 'red',
            display: 'block',
            '&:hover': {
                color: 'green'
            },
            [theme.breakpoints.down('md')]: {
                color: 'black',
                display: 'block',
            },
        }
    }))


    const classes = useStyles()

    
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
    return (
        <>
            {/* <h1 className={classes.header}>DashBoard</h1>
            <Button
                variant='contained'
                className={classes.button}

            >
                Sign in
            </Button> */}
            <Navbar user={userLogin}/>
            <Grid container>
                <Grid item md={3} sm={2} xs={2}>
                    <Leftbar />

                </Grid>
                <Grid item md={7} sm={10} xs={10}>
                    <Post />
                    {/* <Crud/> */}
                </Grid>
                <Grid item md={2} className={classes.hideGrid}>
                    <Right />
                </Grid>
            </Grid>
        </>
    )
}

export default DashBoard