import MoviesCard from "./moviescard"
import './movies.css'

import b1 from '../../assets/kaithi2.jpg'
import b2 from '../../assets/rolex.jpeg'
import b3 from '../../assets/leo2.avif'
import b4 from '../../assets/vikram2.avif'

export default function Upcoming() {
  return (
    <div className='upcoming'>
      <div className="flex w-full h-screen flex-col md:flex-row items-center justify-center text-dark-1003 relative">
        <div className='md:w-5/6'>
          <div className="text-dark-1003">
          <h1 className="text-2xl font-bold">The Future</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-5">
              <MoviesCard name="Kaithi2" img={b1} />
              <MoviesCard name="Rolex Spin-Off" img={b2} />
              <MoviesCard name="Leo2" img={b3} />
              <MoviesCard name="Vikram2" img={b4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
