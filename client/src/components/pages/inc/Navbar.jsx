import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footerStyle.css';
import '../../styles/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Search from './Search';


function Navbar() {
  const [isBlurred, setBlur] = useState(false);
    
  const toggleBlur = ()=>{
          setBlur(!isBlurred);
          console.log("Hello world!");
      }
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-inverse text-white bg-dark">
      <div className="container-fluid">
        <button onClick={toggleBlur}>Menu</button>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Search />
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
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">Community</Link>
            </li>
          </ul>
        </div>
        <button className='login'>
          <Link to='/signup'>Login</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;