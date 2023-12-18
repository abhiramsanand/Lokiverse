export default function CharactersCard(props) {
    return (
        <a href={props.img} className="flex items-center">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-1004 rounded-md py-4 px-4 flex">
                <img src={props.img} className="w-20 h-20 object-cover" alt={props.name}></img>
                <div className="ml-4">
                    <h1 className="font-bold md:text-xl text-light">{props.name}</h1>
                    <p className="font-light text-light-100">{props.actor}</p>
                    <p className="font-light text-light-100 mt-5">{props.desc}</p>
                </div>
            </div>
        </a>
    );
}
