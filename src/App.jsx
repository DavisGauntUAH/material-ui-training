import React from 'react'
import { CssBaseline, Grid, Container } from '@mui/material'
import TopBar from './components/TopBar';
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';

const App = () => {
  return (
    <div>
        <CssBaseline />
        <TopBar />
        <main>
            <Header/>
            <Container maxWidth='lg' style={{padding: '50px 10px'}}>
                <Grid container spacing={4}>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                    <PhotoCard img='https://source.unsplash.com/random'/>
                </Grid>
            </Container>
        </main>
    </div>
  )
}

export default App