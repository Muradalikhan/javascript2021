
import { useState } from "react";
import 'bootstrap-4-react/dist/bootstrap-4-react';
import { Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import data from "./data";
import Paper from '@mui/material/Paper';




function Quizapp() {
    let [question, setquestion] = useState(data);
    let [questionInd, setQuestionInd] = useState(0);
    let [controllArrlength, setControllArrlength] = useState(true);



    let increament = () => {

        if (questionInd === (question.length) - 1) {
            setControllArrlength(false)
            console.log(controllArrlength)
        }
        else {
            questionInd = questionInd + 1
            setQuestionInd(questionInd)

        }


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

                        <Grid className='p-3'>

                            <Typography >
                                {
                                    question[questionInd].question
                                }

                            </Typography>
                        </Grid>

                        <Grid>

                            {
                                question[questionInd].option.map((item) => {
                                    return (
                                        <Grid className='p-2' >
                                            <Button sx={{ width: 300 }} variant='contained'>{item}</Button>

                                        </Grid>
                                    )
                                })
                            }


                        </Grid>
                        <Grid sx={6} className='p-5'>
                            <Button variant='outlined' onClick={increament}>Next</Button>

                        </Grid>



                    </Grid> : <Grid>
                        <AppBar position="static">
                            <Toolbar>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Result
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid className='p-3 d-flex justify-content-center'>
                            <Paper sx={{ width: 1 / 2 }} elevation={3}>
                                you scored :
                            </Paper>
                        </Grid>
                    </Grid>
                }




            </Grid>
        </div>
    )
}

export default Quizapp