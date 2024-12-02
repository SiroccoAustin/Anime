import React from 'react';
import {Link} from "react-router-dom"
import '../../../components/styles/Anothersec.css';
import Img from './images/_19c03c88-8aa9-41c3-bc1a-1534aa74a707.jpg'

function Genre() {
    let genres = {
        "Action": "green", "Adven...": "purple", "Cars": "yellow", "Comedy": "red", "Demen...": "orange", "Demons": "blue", "Drama": "pink",
        "Ecchi": "orangered", "Fantasy": "white", "Game": "brown", "Harem": "gold", "Historic...": "red", "Horror": "blue", "Isekai": "yellow",
        "Josei": "green", "Kids": "brown", "Magic": "purple", "Martial...": "orange", "Mecha": "white", "Military": "blue", "Music": "pink",
        "Mystery": "purple", "Parody": "white", "Police": "brown"
    }
    let topAnime = {
        "One Piece": "01",
        "Black Clover": "02",
        "Naruto": '03',
        "Dragon Ballz": "04",
        "Attack on Titan": "05",
        "Hunter x Hunter": "06",
        "Ju Ju tsu kaisen": "07",
        "One Punchman": "08",
        "Code Gease": "09",
        "Dr Stone": "10"
    }
  return (
    <section>
        <div className="genre">
            {Object.entries(genres).map(([genre, color])=>(
                <div key={genre} style={{"color": color}} className="grn">{genre}</div>
            ))}
            <button className='more-btn'>
                <Link className="Link" to="/showmore">Show More</Link>
            </button>
        </div>
        <div className='top'>
            {Object.entries(topAnime).map(([anime, num])=>(
                <div key={num} className="mainBody">
                    <div className="number">{num}</div>
                    <div className="opt">
                        <div>
                            <img className='img' src={Img} alt=""/>
                        </div>
                        <div class="title">
                            <div>{anime}</div>
                            <div>Again this is cool</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Genre