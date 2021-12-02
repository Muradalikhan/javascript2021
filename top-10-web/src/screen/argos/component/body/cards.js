import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function Cards() {
    return (

        
            <Grid container md={10} xs={12} sx={{ margin: '0 auto', alignItems: 'center', justifyItems: 'center' }}>
                <Grid item md={4} xs={8} sx={{margin:'0 auto'}}>
                    <Card sx={{ maxWidth: 445, margin: '4px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some random text
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item md={4} xs={8} sx={{margin:'0 auto'}}>
                    <Card sx={{ maxWidth: 445, margin: '4px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some random text
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item md={4} xs={8} sx={{margin:'0 auto'}}>
                    <Card sx={{ maxWidth: 445, margin: '4px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Some random text
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
            </Grid>
        
    );
}
