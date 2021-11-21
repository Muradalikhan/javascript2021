import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../asset/img/img1.jpg'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default function ImgMediaCard() {

    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        card: {
            maxWidth: 800,
            marginTop: 5,
            
        },
        cardmedia: {
            height: 440,
            [theme.breakpoints.down('md')]:{
                maxHeight:350,
            },
            [theme.breakpoints.down('sm')]:{
                height:200,
            },
        },
        content:{
            [theme.breakpoints.down('sm')]:{
                height:120,
            },
        },
    }))
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="green iguana"
               className={classes.cardmedia}
                image={img}
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
