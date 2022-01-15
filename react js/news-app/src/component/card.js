import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { success } from './message';



export default function MyCard({ news }) {
    const [saveNews, setSaveNews] = useState([])


    useEffect(() => {

    }, [news,saveNews])



    const saveNewsData = (item) => {
        setSaveNews([
            ...saveNews,
            item
        ])
       

        localStorage.setItem('newsArr', JSON.stringify(saveNews))
        success()
    }




    return (

        <>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                {
                    news.map((item, index) => {

                        return (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="240"
                                        image={item.urlToImage}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title.length > 20 ? `${item.title.substring(0, 25)}...` : item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description.length > 20 ? `${item.description.substring(0, 120)}...` : item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => saveNewsData(item)}>Save</Button>
                                        <Button size="small"><a href={item.url} style={{ textDecoration: 'none' }}>View on web</a> </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }

            </Grid>

        </>
    );
}
