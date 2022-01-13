import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import ApiKey from '../config/config';
import { useEffect, useState } from 'react';



export default function MyCard({ sources }) {

    const [news, setNews] = useState([])
    // const [searchNews, setSearchNews] = useState('Sports')



    const fetchApi = async () => {

       
        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles)
            })
    }



    useEffect(() => {
        fetchApi()
    }, [sources])

    console.log(news)


    return (

        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>





                {
                    news.map((item, index) => {

                        return (
                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ maxWidth: 345 }} key={index}>
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
                                        <Button size="small">Save</Button>
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
