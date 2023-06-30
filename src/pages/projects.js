import * as React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import { Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../Footer';

export default function MediaCard() {
  return (
    <>
      <Container className='card-container'>
        {/* Password Generator */}
        <Grid container >
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/gen-pic.png.png"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Password Generator
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project is a password generator built with JavaScript.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="http://lennylettuce.github.io/Password-Generator/" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* Coding Quiz */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/quiz-screenshot.png"
                alt="quiz"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coding Quiz
        </Typography>
                <Typography variant="body2" color="text.secondary">
                    This project is a coding quiz built with JavaScript and deployed via github.
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://lennylettuce.github.io/Coding-Quiz" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* Weather Stats */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/screenshot.png"
                alt="screenshot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  This application uses weather API to obtain weather stats that display in a 5 day forecast for any city search.
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://lennylettuce.github.io/Weather-Application/" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* notesapp */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/notesapp.png"
                alt="screenshot of app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  NotesApp!
        </Typography>
                <Typography variant="body2" color="text.secondary">
                    This application uses API for routes and MVC structure to serve static pages from the user can interact with. This group project is still in the process of being completed.
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://github.com/Lennylettuce/NotesApp" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* rickvia */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/rickandmorty.png"
                alt="rickviapp"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Rickvia!
        </Typography>
                <Typography variant="body2" color="text.secondary">
                    This project 
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://github.com/Lennylettuce/t-rick-vial-mort-suit" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* horiseon */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="/images/horiseon-pic.png"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 
        </Typography>
                <Typography variant="body2" color="text.secondary">
                  
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://github.com/Lennylettuce/Horiseon" >Github</a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />

    </>
  );
}