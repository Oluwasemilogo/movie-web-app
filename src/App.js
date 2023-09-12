import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
