import { Paper } from "@mui/material"
import 'bootstrap-4-react'
import Grid from '@mui/material/Grid'


function InfoBoard(prop){
    return(
        
            <div className='p-3 m-1   d-inline-block' style={{backgroundColor: prop.color}}>
                <Grid container md={12}>
                    <Grid md={8}>
                        <p>Confirmed Cases</p>
                        <h3>123456</h3>
                    </Grid>
                    <Grid md={4}>
                        <p className='border rounded'>last 24 hourse</p>
                        <p>img</p>
                    </Grid>
                </Grid>
            </div>
       
    )
}

export default InfoBoard