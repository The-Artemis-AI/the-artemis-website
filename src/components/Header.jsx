import React from 'react'

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
    <div className='burger-content'>
        <ul>
        <li className={props.Linkclass || "active"}>HOME</li>
        <li>SERVICES</li>
        <li>SUCCESS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>

        </ul>
    </div>
    <div className="headerSide">
    <div>
    <ul>
    <li className={props.Linkclass || "active"}>HOME</li>
    <li>SERVICES</li>
    <li>SUCCESS</li>
    <li>ABOUT</li>
    <li>CONTACT</li>

    </ul>
    
    </div>
    



    </div>
    </div>

    
  )
}

export default Header