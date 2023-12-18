import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Aboutindex from './components/about/aboutindex';
import MoviesPage from './components/movies/movies';
import CharactersPage from './components/characters/characters';
import Updates from './components/updates/updates';
import Gallery from './components/gallery/gallery';
import './App.css';

const App = () => {
  return (
    <div className='bg-dark-900'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutindex />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
