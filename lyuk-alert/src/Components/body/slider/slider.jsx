
import React, { useState } from 'react';
import PageOne from './pages/pageone';
import PageTwo from './pages/pagetwo';
import PageThree from './pages/pagethree';
import PageFour from './pages/pagefour';


const pages = [<PageOne />, <PageTwo />, <PageThree />, <PageFour/>];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + pages.length) % pages.length
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button">Prev</button>
      <div className="slider-content">
        {pages[currentIndex]}
      </div>
      <button onClick={nextSlide} className="slider-button">Next</button>
    </div>
  );
};

export default Slider;
