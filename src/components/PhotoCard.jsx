import React from 'react'
import { Typography, Card, CardActions, CardContent,
    CardMedia, Button, Grid } from '@mui/material'

const PhotoCard = ({ img }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardMedia 
                component='img'
                image= {img}
                title= 'Immage Title'
                height= '140'
                alt='image failed'
            />
            <CardContent>
                <Typography gutterBottom variant='h6'>
                    Heading
                </Typography>
                <Typography>
                    This is a media card. this discribes the content
                </Typography>
                <CardActions>
                    <Button size='small' color='primary'>
                        View
                    </Button>
                    <Button size='small' color='primary'>
                        Edit
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default PhotoCard