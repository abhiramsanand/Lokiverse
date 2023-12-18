import {React} from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {

  return (
    <div className="homepage">
      <div className='loki'>
        <text>LOKIVERSE</text>
      </div>
      <div className='links'>
        <Link to="/about">About</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/updates">Updates</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default HomePage;
