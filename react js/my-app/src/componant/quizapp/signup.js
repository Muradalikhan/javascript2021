import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert } from "@mui/material";
import Quizapp from "./Quizapp";



function Signup() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [errorControll, setErrorControll] = useState(false);
    let [compControll, setCompControll] = useState(true)



    let signin = () => {
        if (name.length === 0 || email.length === 0) {
            setErrorControll(true);
        }
        else {

            setErrorControll(false);
            setCompControll(false);

        }
    }

    return (
        <div>
            <div className='main_div'>

                {compControll ? <div>
                    <h2 className='bg-info p-3 text-white'>Quiz App</h2>
                    {errorControll ? <Alert severity="error">Empty field not allowed</Alert> : null}
                    <Box sx={{ border: '1px solid black' }} className='p-5'
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            helperText="e.g Hassan"
                            id="demo-helper-text-aligned"
                            label="*Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            helperText="hassan@gmail.com"
                            id="demo-helper-text-aligned-no-helper"
                            label="*Email"
                            onChange={(e) => setEmail(e.target.value)}

                        />

                    </Box>
                    <button type="button" className="btn btn-info col-sm-6" onClick={signin}>Let's begin</button>
                </div> :
                    <Quizapp name={name} email={email}></Quizapp>}
            </div>
        </div>
    )
}


export default Signup