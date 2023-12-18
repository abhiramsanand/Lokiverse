import MoviesCard from "./moviescard"
import { Link } from 'react-router-dom';

import b1 from '../../assets/kaithi.jpg'
import b2 from '../../assets/vikram.jpg'
import b3 from '../../assets/leo.avif'

export default function Movies() {
  return (
    <div className="text-dark-1003">
      <Link to="/" className="absolute top-4 right-4 hover:text-dark-900 p-2 border border-dark-1003 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
      <h1 className="text-2xl font-bold">The Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-8 gap-5">
        <MoviesCard name="Kaithi" img={b1} />
        <MoviesCard name="Vikram" img={b2} />
        <MoviesCard name="Leo" img={b3} />
      </div>
    </div>
  )
}
