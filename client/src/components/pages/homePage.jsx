import React from 'react'
import Slider from './inc/slider'
import {Link} from 'react-router-dom'
import Vmc from './inc/Vmc'
import AnimeToWatch from './inc/AnimeToWatch'
import '../styles/App.css';



function HomePage() {
    
  return (
    <div className='test'>
        <Slider/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className='col-md-12 text-center'>
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"></div>
                        <p>This is the comment section over here</p>
                        <Link to="/about" className="btn btn-warning shadow">Read more...</Link>
                    </div>
                </div>
            </div>

        </section>
        {/* The second section is about our vision and values */}
        <Vmc />
        {/* This section is for new anime */}
        <AnimeToWatch />
        {/* This is another section */}
    </div>
  )
}

export default HomePage