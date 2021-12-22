import { Button, Divider, Grid, OutlinedInput } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './alibaba.css'





let Footer = () => {
    return (
        <div className='custome_div'>
            <p>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
            <p> <OutlinedInput placeholder="Your email here" sx={{ color: 'white' }} /><Button variant='outlined' sx={{ color: 'white' }}>Subscribe</Button> </p>
            <Grid container md={10} spacing={3} sx={{ marginX: 'auto' }} >
                <Grid item md={3}>
                    <h5>Customer Services</h5>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                </Grid>
                <Grid item md={2}>
                    <h5>Customer Services</h5>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                </Grid>
                <Grid item md={2}>
                    <h5>Customer Services</h5>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                </Grid>
                <Grid item md={2}>
                    <h5>Customer Services</h5>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                </Grid>
                <Grid item md={2}>
                    <h5>Customer Services</h5>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                    <p>Help Center</p>
                </Grid>

            </Grid>
            <Divider sx={{
                backgroundColor: 'white'
            }} />

            <Grid container md={10}  spacing={3} sx={{ marginX: 'auto',marginTop:'5px' }}>
                    <Grid item md={3}>Download : <Button variant='contained'>Apple store</Button></Grid>
                    <Grid item md={2}><Button variant='contained'>Apple store</Button></Grid>
                    <Grid item md={3}><p>Alibaba Supplier App : <Button variant='contained'>Logo</Button></p></Grid>
                    <Grid item md={3} className='mx-5'><p>Follow us on : <FacebookIcon/><TwitterIcon/><YouTubeIcon/><InstagramIcon/>  </p></Grid>
            </Grid>


        </div>
    )
}

export default Footer