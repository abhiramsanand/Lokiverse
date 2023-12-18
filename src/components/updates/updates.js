import React from 'react';
import './updates.css';
import { Link } from 'react-router-dom';

function Updates() {
  return (
    <div>
      <div className='updates'>
      <Link to="/" className="text-light-100 absolute top-4 right-4 hover:text-dark-900 p-2 border border-light-100 hover:bg-dark-1003 hover:border-transparent transition-all duration-300">Home</Link>
        <h1 className="text-2xl font-bold text-light-100">Latest News</h1>
        <p className='intro-text'>
          Renowned for his compelling portrayal as Inspector Bejoy in the acclaimed films Kaithi and Vikram, Narain has dropped a bombshell announcement! In collaboration with the visionary director Lokesh Kanagaraj, the dynamic duo is gearing up to create a gripping 10-minute short film. This short film is set to serve as the cornerstone of the Lokesh Cinematic Universe (LCU).
          Narain hinted that this cinematic gem will make its debut prior to the much-anticipated release of Kaithi 2. What narrative wonders and thrilling surprises await in this prelude to LCU? The Lokiverse community is buzzing with anticipation.
          Meanwhile, Lokesh Kanagaraj himself is deeply engrossed in crafting the cinematic marvel 'Thalaivar 171.' As Lokiverse enthusiasts, we eagerly await the unfolding of this cinematic saga and the promising future of LCU.
          <br /><br />Stay tuned for more updates as Lokiverse continues to unravel its cinematic tapestry!
        </p>
        <p><br /><br /><br /><br /><br /><br /><br /></p>
      </div>
      <div className='updates'>
        <p className='intro-text'>
          Lokesh Kanagaraj, the mastermind behind the Lokesh Cinematic Universe (LCU), has dropped tantalizing hints about the upcoming saga. Brace yourselves, Lokiverse enthusiasts, as a plethora of fresh characters is set to make their mark, ushering in a new era.
          The immediate future of LCU promises the much-anticipated Kaithi 2, slated to follow hot on the heels of Thalaivar 171. Lokesh, in an exclusive revelation, affirmed that Thalaivar 171 would stand as a standalone cinematic marvel outside the LCU realm.
          Addressing the evolving character landscape, Lokesh highlighted the entrance of vibrant new personas with each installment. Vijay Sethupathi's Sethu, now absent, paves the way for the emergence of fresh faces, ensuring a dynamic narrative. The director teased that the storyline would unfold with characters seamlessly stepping into the shoes of their predecessors.
          With Leo joining the LCU constellation, the cinematic universe boasts a stellar lineup featuring Kamal Haasan, Vijay, Suriya, Karthi, and Fahadh Faasil. The anticipation surrounding the interplay of these powerhouse performers has reached a fever pitch, promising an epic cinematic experience.
          As Lokiverse fans gear up for this cinematic odyssey, the roadmap suggests a multi-year journey. With an extensive lineup of films, the 'End Game' of LCU is projected to unfold over the next three years, ensuring an immersive and enthralling experience for audiences.
          <br /><br />Stay tuned for more updates as Lokiverse continues to weave its cinematic magic! 
        </p>
        <p><br /><br /><br /><br /><br /><br /><br /></p>
      </div>
    </div>
  );
}

export default Updates;
