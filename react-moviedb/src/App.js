import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';

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
          <Route path='/react-moviedb' element={<Home/>}/>
          <Route path='/react-moviedb/login' element={ <Login/>}/>
          <Route path='/react-moviedb/:movieId' element={<Movie/>}>
              <Route path='/react-moviedb/:movieId/' element={ <Actors/> }/>
              <Route path='/react-moviedb/:movieId/actors' element={ <Actors/> }/>
              <Route path='/react-moviedb/:movieId/videos' element={ <Videos/> }/>
              <Route path='/react-moviedb/:movieId/similar%20movies' element={ <SimilarMovies/> }/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
      </UserProvider>
    </Router>
  );

export default App;
