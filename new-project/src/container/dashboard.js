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


// custome styling in mui





function DashBoard() {
    let [userLogin, setUserLogin] = useState(false)
    let navigate = useNavigate('')



    let theme = useTheme();
    const useStyles = makeStyles(() => ({
        button: {
            width: 200,
            backgroundColor: 'red',
            display:'block',
            '&:hover':{
                fontSize:'20px'
            },
            [theme.breakpoints.down('md')]: {
                width: 110,
                display:'block',
            },
        },
        header: {
            color: 'red',
            display:'block',
            '&:hover':{
                color:'green'
            },
            [theme.breakpoints.down('md')]: {
                color: 'black',
                display:'block',
            },
        }
    }))


    const classes = useStyles()



    // useEffect(()=>{
    //     if(!userLogin){
    //         navigate('./login')
    //     }
    // },[userLogin])
    return (
        <>
            {/* <h1 className={classes.header}>DashBoard</h1>
            <Button
                variant='contained'
                className={classes.button}

            >
                Sign in
            </Button> */}
            <Navbar/>
            <Grid container>
                <Grid item md={3}>
                    <Leftbar/>
                    
                </Grid>
                <Grid item md={7}>
                    <Post/>
                </Grid>
                <Grid item md={2}>
                    <Right/>
                </Grid>
            </Grid>
        </>
    )
}

export default DashBoard