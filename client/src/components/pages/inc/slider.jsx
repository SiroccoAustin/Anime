import React from 'react';
import Slider1 from './images/_19c03c88-8aa9-41c3-bc1a-1534aa74a707.jpg';
import Slider2 from './images/_38008d10-531e-4956-b9bc-4ae573b4abf4.jpg';
import Slider3 from './images/_432ec5f9-8582-48ee-a06f-2.jpg';
import CreateSlider from './createSlider';

const slidesData = [
  { image: Slider1, alt: 'Slide 1' },
  { image: Slider2, alt: 'Slide 2' },
  { image: Slider3, alt: 'Slide 3' },
];

function Slider(){
  
  return (
    <CreateSlider slides={slidesData} interval={8000}/>

  )
}

export default Slider;
