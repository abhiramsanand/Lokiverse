import { useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import hero from '../../assets/Hero.jpg';

export default function Hero() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-dark-1003 relative">
        <div className='md:w-2/6 md:p-4 border-4 border-dark-1002'>
          <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={hero} alt="hero" onLoad={() => setLoaded(false)} />
        </div>
        <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
          <div className="flex flex-col w-full mb-8">
            <div className='lokitext'><h1 className="text-2xl font-bold">LOKIVERSE</h1></div>
            <Link to="/" className="absolute top-4 right-4 hover:text-dark-900 p-2 border border-dark-1003 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
            <p className="text-xl font-bold text-dark-1002">Uncover Lokiverse: Stories Unveiled, News Revealed.</p>
            <p className="text-base font-light text-dark-1002">Lokiverse is a dedicated platform that explores and celebrates the cinematic universe created by director Lokesh Kanagaraj. Our mission is to provide fans with comprehensive information about Lokesh Kanagaraj's films, characters, and the overall Lokiverse experience.</p>
          </div>
        </div>
      </div>
    </>
  );
}
