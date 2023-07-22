import React from 'react'

function Button(props) {
  return (
    <div>
    
    <button className={" circle " + props.className} id={props.circleId} onClick={props.onClick} type="button"></button>
    </div>
  )
}

export default Button