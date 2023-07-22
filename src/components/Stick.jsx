import React from 'react'
import Button from './Button.jsx'

function Stick(props) {
  return (
    <div>
    <div className='circle-lines'>
          <Button className={props.circleClass1} circleId={props.circleId1} onClick={props.onClick1}/>
          <div className='line'></div>
          <Button className={props.circleClass2} circleId={props.circleId2} onClick={props.onClick2}/>
          <div className='line'></div>
          <Button className={props.circleClass3} circleId={props.circleId3} onClick={props.onClick3}/>
          <div className='line'></div>
          <Button className={props.circleClass4} circleId={props.circleId4} onClick={props.onClick4}/>
          <div className='line'></div>
          <Button className={props.circleClass5} circleId={props.circleId5} onClick={props.onClick5}/>
          </div>
    </div>
  )
}

export default Stick