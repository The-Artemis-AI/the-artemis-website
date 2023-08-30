import React from 'react'

function Image({ImageSource, alt, style, ImageClass, onMouseOver, onMouseLeave, id, background}) {
  return (
    <div className="image" style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
    <img src={ImageSource} alt={alt} id={id} className={ImageClass}/>
    </div>  
  )
  }

export default Image