import React from 'react'
import { Grid, Button } from '@mui/material'

const Oprions = () => {
  return (
    <div>
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant='contained' color='primary'>
                    See my photos
                </Button>
            </Grid>
            <Grid item>
                <Button variant='outlined' color='primary'>
                    Secondary action
                </Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default Oprions