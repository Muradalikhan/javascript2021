import { Send } from '@mui/icons-material'
import { Input, Paper, Button } from '@mui/material'
import 'bootstrap'

import React, { useState } from 'react'
import Navbar_1 from '../componant/navbar/navbar1'

export default function Chat() {
    const [message,setMessage]=useState([])

    const sendMsg=()=>{
        setMessage(message)
    }

    return (
        <div>
            <Navbar_1 />
            <Paper elevation={12} sx={{ margin: '100px auto', width: '50%' }}>
                <h1>Chat app</h1>
                <div className='chatScree'>
                    
                    <div>{message}</div>

                </div>
                <Input  placeholder='Write message' onChange={(e)=>setMessage(e.target.value)} />
                <Button variant='contained' onClick={sendMsg}><Send /> Send</Button>
            </Paper>
        </div>
    )
}
