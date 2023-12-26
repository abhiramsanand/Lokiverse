import './gallery.css'

export default function SongCard(props) {
    return (
        <audio controls>
            <source src={props.aud} type="audio/mp3" />
        </audio>
    )
}