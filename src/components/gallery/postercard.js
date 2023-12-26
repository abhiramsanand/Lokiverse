import './gallery.css'

export default function PosterCard(props) {
    return (
        <a href={props.img}>
            <div className='lifecontainer-box'>
                <div className='image-container'>
                    <img src={props.img} alt='a' className='course-image' />
                </div>
            </div>
        </a>
    )
}