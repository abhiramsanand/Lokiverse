import React from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

import a1 from '../../assets/kaithiposter1.jpg'
import a2 from '../../assets/kaithiposter2.png'
import a3 from '../../assets/kaithiposter3.jpg'
import a4 from '../../assets/vikramposter1.jpg'
import a5 from '../../assets/vikramposter2.jpg'
import a6 from '../../assets/vikramposter3.jpg'
import a7 from '../../assets/leoposter1.jpg'
import a8 from '../../assets/leoposter2.jpg'
import a9 from '../../assets/leoposter3.jpg'


import s1 from '../../assets/songs/Anbenum.mp3'
import s2 from '../../assets/songs/Badass.mp3'
import s3 from '../../assets/songs/Bloody Sweet.mp3'

function Gallery() {
  return (
    <div>
      <div className='gallery'>
        <Link to="/" className="text-dark-1003 absolute top-4 right-4 hover:text-dark-900 p-2 border border-dark-1003 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
        <h1 className="text-2xl font-bold text-dark-1003 mr-6">Gallery</h1>
        <div className='links'>
          <a href="#posters">Posters</a>
          <a href="#songs">Songs</a>
        </div>
      </div>
      <div id='posters' className='gallery2'>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a1} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a2} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a3} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a4} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a5} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a6} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a7} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a8} alt='a' className='course-image' />
          </div>
        </div>
        <div className='lifecontainer-box'>
          <div className='image-container'>
            <img src={a9} alt='a' className='course-image' />
          </div>
        </div>
      </div>
      <div id='songs' className='gallery2'>
        <text className='text-2xl font-bold text-dark-900 mr-4'>Anbenum</text>
        <audio controls>
          <source src={s1} type="audio/mp3" />
        </audio>
        <text className='text-2xl font-bold text-dark-900 mr-4'>Badass</text>
        <audio controls>
          <source src={s2} type="audio/mp3" />
        </audio>
        <text className='text-2xl font-bold text-dark-900 mr-4'>Bloody Sweet</text>
        <audio controls>
          <source src={s3} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Gallery;
