import CharactersCard from "./characterscard"
import './characters.css'
import { Link } from 'react-router-dom';

import b1 from '../../assets/dillikarthi.webp'
import b2 from '../../assets/vikramkamal.webp'
import b3 from '../../assets/rolexsurya.webp'
import b4 from '../../assets/leovijay.avif'
import b5 from '../../assets/amar.jpg'
import b6 from '../../assets/bejoy.jpeg'
import b7 from '../../assets/Anbudoss.webp'
import b8 from '../../assets/adaikkalam.jpeg'
import b9 from '../../assets/sandhanam.webp'
import b10 from '../../assets/napolean.jpg'
import b11 from '../../assets/harold.avif'
import b12 from '../../assets/antony.avif'


export default function Characters() {
  return (
    <div className="characters">
      <div className="text-dark-1003">
        <h1 className="text-2xl font-bold text-dark-1003">Main Characters</h1>
        <Link to="/" className="absolute top-4 right-4 hover:text-dark-900 p-2 border border-dark-1003 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-20 gap-5">
          <CharactersCard name="Dilli" actor="Portrayed by Karthi" desc="As a former convict with a mysterious past, Dilli finds himself unintentionally entangled in a high-stakes drug trafficking operation. What sets Dilli apart is his unwavering determination and resourcefulness. A man of few words, he communicates more through his actions, showcasing his strategic brilliance and physical prowess." img={b1} />
          <CharactersCard name="Vikram" actor="Portrayed by Kamal Haasan" desc="Vikram is a multifaceted and enigmatic figure. He is a master of disguise, a quality that adds layers of intrigue to his persona. As an intelligence officer, he navigates a complex world of espionage and covert operations. What sets Vikram apart is his keen intellect, honed combat skills, and an ability to seamlessly blend into any situation." img={b2} />
          <CharactersCard name="Rolex" actor="Portrayed by Suriya" desc="Rolex is a formidable presence, embodying the essence of cunning and intrigue. Rolex operates in the shadows, navigating the intricate web of crime with a calculated and mysterious demeanor. His sharp intellect and strategic thinking make him a key player in the unfolding drama, and his alliances are shrouded in secrecy." img={b3} />
          <CharactersCard name="Leo Das" actor="Portrayed by Vijay" desc="Leo Das is a captivating enigma with dual identities. Initially known as Parthi, a compassionate café owner in the tranquil Himalayas, Leo discovers solace in rescuing animals. Yet, beneath this benevolent surface, a compelling mystery unfolds – Leo Das, potentially the estranged son of a notorious gangster embroiled in a perilous cartel war." img={b4} />
          <CharactersCard name="Amar" actor="Portrayed by Fahadh Faasil" desc="Amar, a devoted officer in the black squad, balances duty and despair in a harrowing investigation. Driven by a haunting past tragedy, his pursuit of justice blurs into a personal mission verging on vengeance. This complex interplay adds layers to his character in a gripping narrative of crime, duty, and an unwavering quest for truth." img={b5} />
          <CharactersCard name="Bejoy" actor="Portrayed by Narain" desc="Inspector Bejoy, a righteous force against Trichy's drug underworld, embodies unwavering honesty and disdain for narcotics. Despite standing as a beacon of morality, he conceals a simmering frustration, battling the relentless tide of corruption. Bejoy portrays a man on a perpetual tightrope, his principles clashing with the harsh realities of his profession." img={b6} />
          <CharactersCard name="Anbu Doss" actor="Portrayed by Arjun Das" desc="Anbudoss, aka Anbu, rules with a velvet glove over an iron fist, orchestrating a drug empire with ruthless cunning. Behind a charming smile, vulnerability surfaces through strained ties with older brother Adaikalam and the fear of losing his empire. Anbu emerges as an alluring yet chilling figure, casting a long shadow with charisma and ruthlessness." img={b7} />
          <CharactersCard name="Adaikkalam" actor="Portrayed by Harish Uthaman" desc="Adaikalam, the elusive ghost kingpin, commands a drug empire through whispered influence, a cunning intellect veiled in eerie mystique. Rumored as a ruthless tyrant and shrewd strategist, his name instills fear in cops and garners trembling confessions from criminals." img={b8} />
          <CharactersCard name="Sandhanam" actor="Portrayed by Vijay Sethupathi" desc="Sandhanam, a cunning strategist with a chilling intellect, stands apart from the brutal gangsters and righteous cops. Operating in the shadows, he embodies a quiet menace, rarely resorting to overt violence. Masked in civility, his calm eyes pierce through facades, driven by an insatiable hunger for power." img={b9} />
          <CharactersCard name="Napolean" actor="Portrayed by George Maryan" desc="Napoleon, a seasoned police veteran, exudes quiet competence and unwavering loyalty. His weathered face and steely gaze reflect battles fought and scars earned. Operating with a calm demeanor, he possesses a sharp mind and an unwavering commitment to justice, often turning the tide in high-pressure situations." img={b10} />
          <CharactersCard name="Harold Das" actor="Portrayed by Arjun Sarja" desc="Harold Das executes his elder brother's will with cold precision, contrasting Antony's fiery rage. Calculating and efficient, he navigates the shadows, leaving a trail of silent bodies. His icy calm masks a chilling determination, pursuing Parthi with unwavering focus. Harold is the unseen predator whose silent efficiency makes him a dangerous force." img={b11} />
          <CharactersCard name="Antony Das" actor="Portrayed by Sanjay Dutt" desc="Antony Das, the relentless drug lord fueled by vengeance and paranoia, relentlessly pursues Parthi, his believed estranged son, sparing no effort to capture and eliminate him. His aging yet unyielding demeanor paints a haunting portrayal of a man trapped in the shadows, driven by a relentless quest for revenge and control." img={b12} />
        </div>
      </div>
    </div>
  )
}
