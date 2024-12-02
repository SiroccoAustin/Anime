import React from 'react';
import '../../../styles/Stream/stream.css';
import Footer from '../../inc/Footer'
import Recommend from './Recommend'
import Comments from './Comments'
import Watch from './Watch'

function Stream() {
  return (
    <section style={{marginTop: "1px", width: "100%"}}>
        <div className="children">
          <Watch/>
          <Comments />
          <Recommend/>
          <Footer />
        </div>
    </section>
  )
}

export default Stream