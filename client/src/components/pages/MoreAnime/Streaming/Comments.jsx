import React from 'react'
import '../../../styles/Stream/comments.css'
import Genre from '../../inc/Genre';

function Comments() {
  return (
    <section className="comment-sec">
        <div className="comments">
            This is the full comment section over here
        </div>
        <div className="topAnime">
          <Genre />
        </div>
    </section>
  )
}

export default Comments;