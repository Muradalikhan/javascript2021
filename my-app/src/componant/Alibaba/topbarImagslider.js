
import { Button, ButtonGroup } from "@mui/material"
import Grid from '@mui/material/Grid'

let TopbarimageSlider = () => {


    return (
        <div>
            <ButtonGroup size="large" color='inherit' variant='text' aria-label="large button group"
            sx={{height:'100px'}}
            >
                <Button className='px-5 '>one</Button>
                <Button className='px-5 '>Free Inspection Services</Button>
                <Button className='px-5 '>10000 ditial booth</Button>
                <Button className='px-5 '>10000 featured exhibition</Button>
                <Button className='px-5 ' variant='contained' sx={{borderRadius:'50px'}}>View more</Button>
            </ButtonGroup>
        </div>
    )
}

export default TopbarimageSlider