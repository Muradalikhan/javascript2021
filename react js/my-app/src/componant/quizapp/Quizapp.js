
import { useState } from "react";
import 'bootstrap-4-react/dist/bootstrap-4-react';
import { Grid, Link } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import data from "./data"; //data is Array 
import Paper from '@mui/material/Paper';
import './quiz.css'




function Quizapp(props) {
    let [questionArr, setquestionArr] = useState(data);
    let [questionInd, setQuestionInd] = useState(0);
    let [scoreCount, setScoreCount] = useState(0);
    let [colorWidth, setColorWidth] = useState(0);
    let [controllArrlength, setControllArrlength] = useState(true);
    let [signIn, setSignIn] = useState(false);



    let increament = () => {

        if (questionInd === (questionArr.length) - 1) {
            setControllArrlength(false)
            colorWidth=12
            setColorWidth(colorWidth)

        }
        else {
            questionInd = questionInd + 1
            setQuestionInd(questionInd)

            colorWidth=colorWidth+1
            setColorWidth(colorWidth)

        }


    }

    let checkAns=(selectedAns,correctAns)=>{
        if(selectedAns===correctAns){
            setScoreCount(scoreCount+1)
        }
        else{
            setScoreCount(scoreCount)

        }
    }


    let signInPage=()=>{
        setSignIn(true)
    }


    return (
        <div>
            
            <Grid>
                {
                    controllArrlength ? <Grid>
                        <AppBar position="static">
                            <Toolbar>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Quiz App
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid className='time_bar' xs={colorWidth}></Grid>

                        <Grid className='p-3'>

                            <Typography >
                                {
                                    questionArr[questionInd].question
                                }

                            </Typography>
                        </Grid>

                        <Grid>

                            {
                                questionArr[questionInd].option.map((item) => {
                                    return (
                                        <Grid className='p-2' >
                                            <Button sx={{ width: 300 }} variant='contained' onClick={()=>checkAns(item,questionArr[questionInd].answer)}>{item}</Button>

                                        </Grid>
                                    )
                                })
                            }


                        </Grid>
                        <Grid sx={6} className='p-5'>
                            <Button variant='contained'  onClick={increament}>Next</Button>

                        </Grid>



                    </Grid> : <Grid>
                        <AppBar position="static">
                            <Toolbar>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Result
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Grid className='time_bar' xs={colorWidth}></Grid>
                        <Grid className='p-3 d-flex justify-content-center'>
                            <Paper sx={{ width: 1 / 2 , height:200}} className='p-3' elevation={3}>
                                
                               <p> Name: <b> {props.name}</b></p>
                               <p> Email: <b>{props.email}</b></p>
                                
                               <p> you scored : <b>{scoreCount}</b> out of <b>{questionArr.length}</b></p>

                                <Button variant='contained' onClick={signInPage}>Logout </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                }




            </Grid>
        </div>
    )
}

export default Quizapp