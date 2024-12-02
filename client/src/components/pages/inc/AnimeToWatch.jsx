import React from 'react'
import '../../../components/styles/design.css';
import AnotherSection from './AnotherSection';
import LastSection from './LastSection';
import Footer from './Footer';
import Genre from './Genre';
import generateAnimeData from '../../../Api/animeApi';
import { Link } from 'react-router-dom';


function AnimeToWatch() {
    
    const animeData = generateAnimeData(12);
  return (
    <div>
        <section className="anime-section">
            <div>
                <div className="main-page">
                    {
                        animeData.map((anime, index)=>(
                        <div key={index}>
                        <Link to={anime.url} className="kard">
                            <img className='image' src={anime.images} alt=""/>
                            <div class="play-button">&#9658;</div>
                        </Link>
                        <p className='tit'>{anime.title}</p>
                        <p className='tit-2'>{anime.source} <span className='dot'></span>{anime.duration}</p>
                        </div>
                        ))
                    }
                </div>
                {/* This is another section of anime */}
                <AnotherSection />
                <LastSection/>
            </div>
            <Genre />
        </section>
       <Footer />
    </div>
  )
}

export default AnimeToWatch