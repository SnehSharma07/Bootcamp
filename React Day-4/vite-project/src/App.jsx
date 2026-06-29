
import React from 'react';
import MovieProvider from './Context/MovieProvider';
import MovieList from './Context/MovieList';

const App = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
};

export default App;  