import React from 'react';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Actor from './Actor';

// Image
import NoImage from '../images/no-image.jpg';


const Actors = () => {
    const movie = JSON.parse(sessionStorage.getItem("movieData"))
    
    return (
        <Grid header='Actors'>
        {movie.actors.map(actor=>(
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path ?
              `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
            }
          />
        ))}
    </Grid>
    )
}

export default Actors;
