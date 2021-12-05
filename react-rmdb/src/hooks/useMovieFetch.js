import { useState, useEffect } from 'react';
import API from '../API';

// Helper
import { isPersistentState } from '../helpers';


export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const videos = await API.fetchMovieVideo(movieId);
        
        console.log("v")
        console.log(videos)
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

       
        setState({
          ...movie,
          actors: credits.cast,
          directors,
          videokey: videos.results
          
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistentState(movieId);
    if(sessionState){
      setState(sessionState)
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //Write to sessionStorage
  useEffect(()=>{
    sessionStorage.setItem(movieId, JSON.stringify(state))
  },[movieId,state]);

  return { state, loading, error };
};
