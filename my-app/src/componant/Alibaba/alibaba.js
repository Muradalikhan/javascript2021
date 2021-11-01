import Body from "./body"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SwipeableTextMobileStepper from "./imgSlider"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LeftCompHeader2 from './leftCompHeader2'
import TopbarimageSlider from './topbarImagslider'


let Alibaba = () => {
    return (
        <div>

            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Header />
                    <Navbar />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <TopbarimageSlider />
                   
                </Grid>
            </Grid>

            <Grid container className='m-auto' md={10}>
                <Grid item xs={12} sm={12} md={2}>
                    <Paper>
                        <LeftCompHeader2 />
                    </Paper>
                </Grid>
                <Grid item md={8} >
                    <Paper>
                        <SwipeableTextMobileStepper />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Paper> <LeftCompHeader2 /></Paper>
                </Grid>
            </Grid>

            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Body />
            <Footer />
        </div>
    )
}

export default Alibaba