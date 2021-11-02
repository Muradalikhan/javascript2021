
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SwipeableTextMobileStepper from "./imgSlider"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LeftCompHeader2 from './leftCompHeader2'
import Card1 from './card1'


let Alibaba = () => {
    return (
        <div >
            <Grid 
                sx={{ backgroundColor: '#d3d3d35c' }}
            >
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Header />
                        <Navbar />
                    </Grid>
                </Grid>

                <Grid container className='mt-4 mx-auto'  md={11}
                    sx={{ border: '0.5px solid lightgrey', height: '500px' }}
                >
                    <Grid item xs={12} sm={12} md={3}>
                        <Paper>
                            <LeftCompHeader2 />
                        </Paper>
                    </Grid>
                    <Grid item md={6} >
                        <Paper>
                            <SwipeableTextMobileStepper />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Paper> <LeftCompHeader2 /></Paper>
                    </Grid>
                </Grid>
                <Grid container className='mt-4 mx-auto' md={11}>
                   
                        <Card1 />
                  
                </Grid>

                <Footer />
            </Grid>
        </div>
    )
}

export default Alibaba