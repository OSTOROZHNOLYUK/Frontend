import React, { useState, useEffect } from 'react';
import PageOne from './pages/pageone';
import PageTwo from './pages/pagetwo';
import PageThree from './pages/pagethree';
import PageFour from './pages/pagefour';
import './slider.scss';



const Slider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    
    const pages = [
        <PageOne />,
        <PageTwo />,
        <PageThree />,
        <PageFour/>
        
    ];

    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }, 10000); 

        return () => clearInterval(interval); 
    }, [pages.length]);

  return (
    <div className={`slider ${currentPage === 0  || currentPage === 3 ? 'orange-background' : ''}`}>
          <div className="slider-content">
              {pages[currentPage]}
          </div>
          <div className="dots">
              {pages.map((_, index) => (
                  <span 
                      key={index} 
                      className={`dot ${currentPage === index ? 'active' : ''}`} 
                      onClick={() => setCurrentPage(index)} 
                  />
              ))}
          </div>
      </div>
  );
};

export default Slider;

