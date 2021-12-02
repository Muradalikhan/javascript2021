import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Styles=makeStyles((theme)=>({
    imgResposives: {
        width: "80%",
        margin: '50px auto',
        height: 600,
        [theme.breakpoints.only("xs")]: {
            width: "70%",
            margin: '50px auto',
            height: 300,
        },
      }
}))

const classes=Styles()

export default function QuiltedImageList() {
    return (
        <>
            <ImageList
                className={classes.imgResposives}
                variant="quilted"
                cols={4}
                rowHeight={200}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 200, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Grid container md={10} sx={{margin:'0 auto',paddingBottom:'30px',borderBottom:'1px solid black'}}> 
                    <Grid item md={6}><h2>Great deal and hot products</h2></Grid>
                    <Grid item md={3}><h2>Great deal and hot products</h2></Grid>
                    <Grid item md={3}><h2>black friday deals </h2></Grid>
            </Grid>
        </>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
        rows: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
   

];
