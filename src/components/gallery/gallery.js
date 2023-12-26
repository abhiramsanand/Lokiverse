import React from 'react';
import './gallery.css';
import PosterCard from './postercard';
import SongCard from './songcard';
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


import s1 from '../../assets/songs/l1.mp3'
import s2 from '../../assets/songs/l2.mp3'
import s3 from '../../assets/songs/l3.mp3'
import s4 from '../../assets/songs/l4.mp3'
import s5 from '../../assets/songs/l5.mp3'
import s6 from '../../assets/songs/l6.mp3'
import s7 from '../../assets/songs/l7.mp3'
import s8 from '../../assets/songs/l8.mp3'
import s9 from '../../assets/songs/l9.mp3'
import s10 from '../../assets/songs/l10.mp3'
import s11 from '../../assets/songs/l11.mp3'
import s12 from '../../assets/songs/k1.mp3'
import s13 from '../../assets/songs/k2.mp3'
import s14 from '../../assets/songs/k3.mp3'
import s15 from '../../assets/songs/k4.mp3'
import s16 from '../../assets/songs/k5.mp3'
import s17 from '../../assets/songs/k6.mp3'
import s18 from '../../assets/songs/k7.mp3'
import s19 from '../../assets/songs/k8.mp3'
import s20 from '../../assets/songs/k9.mp3'
import s21 from '../../assets/songs/k10.mp3'
import s22 from '../../assets/songs/k11.mp3'
import s23 from '../../assets/songs/k12.mp3'
import s24 from '../../assets/songs/k13.mp3'
import s25 from '../../assets/songs/k14.mp3'
import s26 from '../../assets/songs/k15.mp3'
import s27 from '../../assets/songs/k16.mp3'
import s28 from '../../assets/songs/k17.mp3'
import s29 from '../../assets/songs/v1.mp3'
import s30 from '../../assets/songs/v2.mp3'
import s31 from '../../assets/songs/v3.mp3'
import s32 from '../../assets/songs/v4.mp3'
import s33 from '../../assets/songs/v5.mp3'
import s34 from '../../assets/songs/v6.mp3'
import s35 from '../../assets/songs/v7.mp3'

function Gallery() {
  return (
    <div>
      <div className='gallery'>
        <Link to="/" className="text-dark-1003 absolute top-4 right-4 hover:text-dark-900 p-2 border border-dark-1003 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
        <h1 className="text-2xl font-bold text-dark-1003 mr-6">Gallery</h1>
        <div className='glinks'>
          <a href="#posters">Posters</a>
          <a href="#songs">Songs</a>
        </div>
      </div>
      <div id='posters' className='gallery2'>
        <PosterCard img={a1} />
        <PosterCard img={a2} />
        <PosterCard img={a3} />
        <PosterCard img={a4} />
        <PosterCard img={a5} />
        <PosterCard img={a6} />
        <PosterCard img={a7} />
        <PosterCard img={a8} />
        <PosterCard img={a9} />
      </div>
      <div id='songs' className='gallery2'>
        <text className='text-2xl font-bold text-dark-900 mr-4'>Anbenum</text>
        <SongCard aud={s1} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Badass</text>
        <SongCard aud={s2} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Bloody Sweet</text>
        <SongCard aud={s3} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Glimpse of Antony Das</text>
        <SongCard aud={s4} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Glimpse of Harold Das</text>
        <SongCard aud={s5} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>I am Scared</text>
        <SongCard aud={s6} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Lokiverse 2.0</text>
        <SongCard aud={s7} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Naa Ready</text>
        <SongCard aud={s8} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Ordinary Person</text>
        <SongCard aud={s9} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Ratata</text>
        <SongCard aud={s10} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Villain Yaaru</text>
        <SongCard aud={s11} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Arrival Of The Ruffien</text>
        <SongCard aud={s12} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Battle of Cop and Killer</text>
        <SongCard aud={s13} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Beginning of the War</text>
        <SongCard aud={s14} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Dilli's Swag</text>
        <SongCard aud={s15} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Emotion Hustler</text>
        <SongCard aud={s16} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Eternal Love</text>
        <SongCard aud={s17} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Grief of Dilli</text>
        <SongCard aud={s18} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Hot Biriyani</text>
        <SongCard aud={s19} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Kaithi Theme</text>
        <SongCard aud={s20} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Kill and Destroy</text>
        <SongCard aud={s21} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Maze</text>
        <SongCard aud={s22} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Nee eppa veruva</text>
        <SongCard aud={s23} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Neel Iravu</text>
        <SongCard aud={s24} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Napolean Theme</text>
        <SongCard aud={s25} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Night is Dark</text>
        <SongCard aud={s26} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Phase of Death Call</text>
        <SongCard aud={s27} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Rise of Dilli</text>
        <SongCard aud={s28} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Lokiverse</text>
        <SongCard aud={s29} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Once Upon a Time</text>
        <SongCard aud={s30} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Pathala Pathala</text>
        <SongCard aud={s31} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Porkanda Singam</text>
        <SongCard aud={s32} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Rolex Entry</text>
        <SongCard aud={s33} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Vikram Title Track</text>
        <SongCard aud={s34} />
        <text className='text-2xl font-bold text-dark-900 mr-4 mt-10'>Wasted</text>
        <SongCard aud={s35} />
      </div>
    </div>
  );
}

export default Gallery;
