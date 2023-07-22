import React from 'react'

function Image({ImageSource,alt}) {
  return (
    <div className="image">
    <img src={ImageSource} alt={alt}/>
    </div>  
  )
  }

export default Image