import React from 'react';
import '../../../components/styles/footerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Img from '../inc/images/logo.png'

function Footer() {
  const A_Z = {
    'All': 'all', '#': 'all', '0-9': 'all', 'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h',
    'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
    'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z' 
  }
  const terms = {
    "Terms of Services": "a",
    "DCMA": "b",
    "Contact": "c",
    "Anime app watch": "d"
  }
  return (
    <section className="footer-sec">
            <div className='foot1'>
                <div className='home'>
                  <img className="home-img" src={Img} alt=''/>
                </div>
                <div className="media">
                    <div>
                    <FontAwesomeIcon icon={faDiscord} style={{ color: '#0088cc', fontSize: '2rem' }}/>

                    </div>
                    <div>
                      <FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc', fontSize: '2rem' }}/>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faRedditAlien} style={{ color: '#0088cc', fontSize: '2rem' }}/>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faTwitter} style={{ color: '#0088cc', fontSize: '2rem' }}/>
                    </div>
                </div>
            </div>
            <div>
              <div className='head-search'>
                <span className='ftz'>A-Z LIST</span>
                <span className='ftz-d'>Searching anime order by alphabet name A to Z.</span>
              </div>
                <div className="options">
                  {Object.entries(A_Z).map(([key, value]) => (
                    <div className="opt-keys" key={key}>
                      {key}
                    </div>
                    ))}
                </div>
              <div>
                <ul>
                  {Object.entries(terms).map(([key, value])=>(
                    <li key={key}>{key}</li>
                  ))}
                </ul>
                <div className="terms1">AniWatch does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</div>
                <div className="terms2">
                  <p>© AniWatch.to. All rights reserved.</p>
                </div>
              </div>
            </div>

       </section>
  )
}

export default Footer