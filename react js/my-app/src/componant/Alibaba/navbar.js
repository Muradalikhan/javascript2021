import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import './alibaba.css'
import { Button, ButtonGroup } from '@mui/material';


export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default'>
                <Toolbar variant="dense">

                    <ButtonGroup variant="text" color='inherit' size='small' aria-label="text button group">
                        <Button><MenuIcon/> Categories </Button>
                        <Button className='px-2'>Ready to Ship</Button>
                        <Button className='px-2'>Personal Protective</Button>
                        <Button className='px-2'>Trade Shows</Button>
                        <Button className='px-2'>Buyer Central</Button>
                        <Button className='px-2'>Sell on Alibaba</Button>
                        <Button className='px-2'>Help</Button>
                        <Button className='pl-5 ml-5'>English - USD</Button>
                        <Button>Shipt to:</Button>
                    
                    </ButtonGroup>










                </Toolbar>
            </AppBar>
        </Box>
    );
}
