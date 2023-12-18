import Movies from "./movies";
import Upcoming from "./upcoming";
import './movies.css'

export default function Moviesindex() {

    return (
        <div className="movies">
            <Movies />
            <Upcoming />
        </div>
    );
}
