import React from 'react';

// Configuration
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../../config';

// Hook
import {useHomeFetch} from '../../hooks/useHomeFetch'

// Image
import NoImage from '../../images/no-image.jpg';

// Components
import Grid from '../Grid'
import Thumb from '../Thumb'
import Spinner from '../Spinner'
import Button from '../Button'


const SimilarMovies = () => {

    const {state,loading,error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();

    return (
        <>
        <Grid header={"Similar Movies"}>
            {state.results.map(movie =>(
                <Thumb 
                key={movie.id}
                clickable
                image = {
                    movie.poster_path?
                    IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
            />

            ))}
        </Grid>
        {loading && (
           <Spinner/> 
        )} 
        
        {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
        )}
        </>
    )
}

export default SimilarMovies;
