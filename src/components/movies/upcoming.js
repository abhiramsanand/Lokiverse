import MoviesCard from "./moviescard"

import b1 from '../../assets/kaithi2.jpg'
import b2 from '../../assets/rolex.jpeg'
import b3 from '../../assets/leo2.avif'
import b4 from '../../assets/vikram2.avif'

export default function Upcoming(){
    return (
        <div className="text-dark-1003 mt-20">
            <h1 className="text-2xl font-bold">The Upcoming</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-8 gap-5">
                <MoviesCard name="Kaithi 2" img={b1} />
                <MoviesCard name="Rolex Spin-Off" img={b2} />
                <MoviesCard name="Leo 2" img={b3} />
                <MoviesCard name="Vikram 2" img={b4} />
            </div>
        </div>
    )
}
