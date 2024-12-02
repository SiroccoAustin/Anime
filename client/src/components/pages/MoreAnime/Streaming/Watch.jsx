import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Stream/watch.css';

function Watch() {
  return (
    <section className='watch-section'>
        <div className='head'>
            <h5>
                <Link to="/">Home</Link>
            </h5>
            &#183;
            <p>name of anime</p>
        </div>
        <div className="screen">
            <div className="episodes">episodes div over here</div>
            <iframe 
                src="https://www.youtube.com/watch?v=TwutPmbOzKU" 
                width="600" 
                height="400" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
                title="Embedded video of example.com">
            </iframe>

        </div>
    </section>
  )
}

export default Watch