import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className='loki'>
        <text>LOKIVERSE</text>
      </div>
      <div className='links'>
        <Link to="/movies">Movies</Link>
        <Link to="/characters">Characters</Link>
      </div>
    </div>
  );
};

export default HomePage;
