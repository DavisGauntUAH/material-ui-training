import React from 'react'
import { Typography, Container } from '@mui/material'
import Options from './Oprions';

const Hader = () => {
  return (
    <div>
        <Container maxWidth='sm' style={{marginTop: '100px'}}>
          <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
              Photo Album
          </Typography>
          <Typography variant='h6' align='center' color='textSecondary' paragraph>
              Hello Everyone!! This is a photo Album for my amazing vacation photos
          </Typography>
          <Options />
      </Container>
    </div>
  )
}

export default Hader