import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowContent = [
    // Your slideshow content here
  ];

  useEffect(() => {
    // Function to change the slide every 2 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowContent.length);
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slideshowContent.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideshowContent.length) % slideshowContent.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowContent.length);
  };

  return (
    <div className="slideshow-container">
      {/* Rendering the current slide */}
      <div className="slide">
        <img src={slideshowContent[currentSlide].image} alt={slideshowContent[currentSlide].title} />
        <h2>{slideshowContent[currentSlide].title}</h2>
        <p>{slideshowContent[currentSlide].content}</p>
      </div>

      {/* Slide Indicators */}
      <div className="indicators">
        <p>
          Slide {currentSlide + 1} of {slideshowContent.length}
        </p>
      </div>

      {/* Prev and Next Buttons */}
      <div className="buttons">
        <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
          Prev
        </button>
        <button onClick={handleNextSlide} disabled={currentSlide === slideshowContent.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
