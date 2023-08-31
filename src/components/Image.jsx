import React from 'react'

function Image({ImageSource, alt, style, ImageClass, onMouseOver, onMouseLeave, id, title}) {
  return (
    <div className="image" style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
    <img src={ImageSource} alt={alt} id={id} className={ImageClass} title={title}/>
    </div>  
  )
  }

export default Image