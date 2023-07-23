import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"

function Header(props) {
  const handleBurgerClick =()=>{
    props.burgerClick(
      
    )
    }
    const handleBurgerClose =()=>{
      props.burgerClose() 
      }
  
  return (
    <div className="headerContainer">
    <div className="logo"><img src={props.Logo} alt='Artemis Logo'/></div>
    <div className='burger'>
    <div className='burger-line'></div>
    <div className='burger-line'></div>
    <div className='burger-line'></div>
    
    </div>
    <div className='burger-content'>
        <ul>
        <li className={props.Linkclass || "active"}><Link smooth to="#home"> HOME</Link></li>
        <li><Link smooth to="#ourSolution">ABOUT</Link></li>
        <li> <Link smooth to="#ourServices">SERVICES</Link></li>
        <li><Link smooth to="#ourSuccess">SUCCESS</Link></li>
        <li><Link smooth to="#ourContact">CONTACT</Link></li>

        </ul>
    </div>
    <div className="headerSide">
    <div>
    <ul>
        <li className={props.Linkclass || "active"}><Link smooth to="#section1"> HOME</Link></li>
        <li><Link to="#ourSolution" smooth>ABOUT</Link></li>
        <li> <Link to="#ourServices" smooth>SERVICES</Link></li>
        <li><Link to="#ourSuccess" smooth>SUCCESS</Link></li>
        <li><Link  to="#ourContact" smooth>CONTACT</Link></li>

        </ul>
    
    </div>
    



    </div>
    </div>

    
  )
}

export default Header