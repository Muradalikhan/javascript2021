
import { useState, useEffect } from "react";
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// material ui
import { Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import Paper from '@mui/material/Paper';
//redux
import { useSelector } from 'react-redux'
//custome css
import './../components/quiz.css'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
//router
import {useNavigate} from 'react-router-dom'
// authentication 
import { getAuth, onAuthStateChanged } from '../config/firebase'
import {signOut} from '@firebase/auth'



function ReduxTest() {

    
   

    let [username, serUserName] = useState('');
    let [useremail, setUserEmail] = useState('');
    let [questionInd, setQuestionInd] = useState(0);
    let [scoreCount, setScoreCount] = useState(0);
    let [colorWidth, setColorWidth] = useState(0);
    let [controllArrlength, setControllArrlength] = useState(true);
   

    //custome responsive

    const theme=useTheme();
    const useStyles=makeStyles(()=>({

        nextBtn:{
           
            [theme.breakpoints.down('md')]:{
                width:300,
            }
        },
        scoreBoard:{
            width:500,
            height:'400px',
           
        },
        mobileResposnsive:{
            [theme.breakpoints.down('sm')]:{

                backgroundColor:'black',
                color:'whitesmoke',
                height:'100vh'
            },
            [theme.breakpoints.up('sm')]:{
                border:'1px solid lightgrey',
                boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.21)',
                
            },
        }
       
    }))
    const classes=useStyles()



    //authentication
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in',uid)
                serUserName(user.displayName)
                setUserEmail(user.email)
                console.log(user)

               
            } else {
               console.log('user is sign out ')
               navigate('/login')
            }
        });

    }, [])



    let increament = () => {

        if (questionInd === (questionArr.length) - 1) {
            setControllArrlength(false)
            colorWidth = 12
            setColorWidth(colorWidth)

        }
        else {
            questionInd = questionInd + 1
            setQuestionInd(questionInd)

            colorWidth = colorWidth + 1
            setColorWidth(colorWidth)

        }


    }

    let checkAns = (selectedAns, correctAns) => {
        if (selectedAns === correctAns) {
            setScoreCount(scoreCount + 1)
        }
    }

    let navigate=useNavigate()
    let logout=()=>{
        signOut(auth)
        navigate('/login')

    }

    const questionArr = useSelector((state) => state)


    return (
        <>
            

            <div>
                <Grid container className={classes.mobileResposnsive}>
                    {
                        controllArrlength ?
                            <Grid item md={12} xs={12} 
                           
                            >
                                <AppBar position="static">
                                    <Toolbar>

                                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                                          Logo
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                                          Quiz App
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                                           {useremail}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <Grid className='time_bar' xs={colorWidth}></Grid>

                                <Grid className='p-5'>

                                    <Typography sx={{height:'30px'}}>
                                        {
                                            questionArr[questionInd].question
                                        }

                                    </Typography>
                                </Grid>

                                <Grid>

                                    {
                                        questionArr[questionInd].option.map((item) => {
                                            return (
                                                <Grid className='p-2 mt-2' >
                                                    <Button sx={{ width: 300 }} variant='outlined' onClick={() => checkAns(item, questionArr[questionInd].answer)}>{item}</Button>

                                                </Grid>
                                            )
                                        })
                                    }


                                </Grid>
                                <Grid xs={12} className='p-5'>
                                    <Button variant='contained'  className={classes.nextBtn} onClick={increament}>Next</Button>

                                </Grid>



                            </Grid>
                            :
                            <Grid item md={12} xs={12} className={classes.mobileResposnsive}>
                                <AppBar position="static">
                                    <Toolbar>

                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                            Result
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <Grid className='time_bar' xs={colorWidth}></Grid>
                                <Grid className='p-3 d-flex justify-content-center'>
                                    <Paper  className={`p-5 ${classes.scoreBoard}`} elevation={3}>

                                        <h1>Score board</h1>
                                        <p> Email: <b>{useremail}</b></p>

                                        <p> you scored : <b>{scoreCount}</b> out of <b>{questionArr.length}</b></p>
                                        
                                        <h2>{scoreCount<5?'Fail':'pass'}</h2>
                                    </Paper>
                                </Grid>

                                <Button variant='contained' className={classes.nextBtn} onClick={logout}>Sign out</Button>
                            </Grid>
                    }




                </Grid>
            </div>
        </>
    )
}

export default ReduxTest