import React from 'react'
import '../../../components/styles/TopAnime.css';
import generateAnimeData from '../../../Api/animeApi';


function Vmc() {
    const divArray = generateAnimeData(5)
  return (
    <section className='section bg-light border-top'>
            <div className="container">
                <div className="row">
                    <div className='col-md-12 text-center'>
                    </div>
                    {/* TOP AIRING */}
                    <div className="shows">
                    <div className='ani-1'>
                        {
                            divArray.map((anime, index) => (
                            <div key={index} className="show1 col md-4">
                                <h6>Top Airing</h6>
                                <div className="contain">
                                    <div>
                                        <img className='anime' src={anime.images} alt=''/>
                                    </div>
                                    <div className="content">
                                        <div>{anime.title}</div>
                                    <div>{anime.rank}</div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        
                    </div>
                    {/* MOST POPULAR */}
                    <div className='ani-1'>
                    {
                            divArray.map((anime, index) => (
                                <div key={index} className="show1 col md-4">
                                    <h6>Top Airing</h6>
                                    <div className="contain">
                                        <div>
                                            <img className='anime' src={anime.images} alt=''/>
                                        </div>
                                        <div className="content">
                                            <div>{anime.title}</div>
                                        <div>{anime.rank}</div>
                                        </div>
                                    </div>
                                </div>
                                ))
                        }
                    </div>
                    {/* MOST FAVORITE */}
                    <div className='ani-1'>
                    {
                            divArray.map((anime, index) => (
                                <div key={index} className="show1 col md-4">
                                    <h6>Top Airing</h6>
                                    <div className="contain">
                                        <div>
                                            <img className='anime' src={anime.images} alt=''/>
                                        </div>
                                        <div className="content">
                                            <div>{anime.title}</div>
                                        <div>{anime.rank}</div>
                                        </div>
                                    </div>
                                </div>
                                ))
                        }
                    </div>
                    {/* LATEST COMPLETED */}
                    <div className='ani-1'>
                    {
                            divArray.map((anime, index) => (
                                <div key={index} className="show1 col md-4">
                                    <h6>Top Airing</h6>
                                    <div className="contain">
                                        <div>
                                            <img className='anime' src={anime.images} alt=''/>
                                        </div>
                                        <div className="content">
                                            <div>{anime.title}</div>
                                        <div>{anime.rank}</div>
                                        </div>
                                    </div>
                                </div>
                                ))
                        }
                        
                    </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Vmc