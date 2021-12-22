import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Actors from './components/Actors';
import Videos from './components/Videos';
import SimilarMovies from './components/SimilarMovies';

// Context 
import UserProvider from './context';

// Styles
import {GlobalStyle} from './GlobalStyle';

const App =() =>(
 
    <Router>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/:movieId' element={<Movie/>}>
              <Route path='/:movieId/' element={ <Actors/> }/>
              <Route path='/:movieId/actors' element={ <Actors/> }/>
              <Route path='/:movieId/videos' element={ <Videos/> }/>
              <Route path='/:movieId/similar%20movies' element={ <SimilarMovies/> }/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
      </UserProvider>
    </Router>
  );

export default App;
