import React, {useEffect,useState, useRef} from 'react'
import message from "../assets/images/message.svg"
import cancel from "../assets/images/xmark-solid.svg"
import {HashLink as Link} from "react-router-hash-link"

const Form = () => {

    

  return (
    <div>
   
  <div className='secondPop'>
  <Link to="#ourContact" smooth>
      <button id='secondPop' >
         <img src={message} alt="contact us"/>
      </button></Link>
    </div>
  
  </div>
  )
}

export default Form