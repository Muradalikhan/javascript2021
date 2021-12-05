import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from '../../asset/img/img1.jpg'
import '../../App.css'

export default function Card_1() {
    return (
        <Card sx={{ maxWidth: 345,margin:'80px 10px 10px 10px',position:'relative' }}>
            <CardMedia
                component="img"
                height="200"
                image={img1}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="heading">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <button size="small" className='btn btnColor'>Details</button>
                <button size="small" className='btn btnColor'>Add to cart</button>
            </CardActions>
        </Card>
    );
}
