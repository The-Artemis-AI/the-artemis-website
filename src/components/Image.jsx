import React from 'react'

function Image({ImageSource, alt, style, ImageClass, onMouseOver, onMouseLeave}) {
  return (
    <div className="image" style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    <img src={ImageSource} alt={alt} className={ImageClass}/>
    </div>  
  )
  }

export default Image