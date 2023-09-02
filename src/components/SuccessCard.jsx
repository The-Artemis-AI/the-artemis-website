import React, { useState, useEffect } from 'react';
import Imager from './Image.jsx'

const SuccessCard = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  return (
    <div className="card-container">
    <div> 
    <Imager ImageSource={props.ImageSource}/>
    <h3>{props.title}</h3>
    </div>
    <div className="success-details">{props.details}</div>
    
    
    </div>
  ); 
};

export default SuccessCard;
