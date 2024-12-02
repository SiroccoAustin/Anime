import React from 'react';
import generateAnimeData from '../../../../Api/animeApi';
import { Link } from 'react-router-dom';

function Recommend() {
  const animeData = generateAnimeData(18)
  return (
    <div>
        <div className='main-3'>
          {
              animeData.map((anime, index)=>(
              <div key={index}>
                <Link to='/stream' className="kard">
                  <img className='image' src={anime.images} alt=""/>
                  <div class="play-button">&#9658;</div>
                </Link>
                <p className='tit'>{anime.title}</p>
                <p className='tit-2'>{anime.source} <span className='dot'></span> {anime.duration}</p>
              </div>
              ))
          }
      </div>
    </div>
  )
}

export default Recommend