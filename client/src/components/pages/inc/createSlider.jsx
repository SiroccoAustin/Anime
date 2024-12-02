import React, { useState, useEffect } from 'react';
import "../../styles/Anothersec.css"

function CreateSlider({ slides, interval = 8000}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, interval);
        return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [slides.length, interval]);
  return (
    <div>
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                <img src={slide.image} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default CreateSlider;
