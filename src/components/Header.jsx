import React, { useState, useEffect, useRef} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import bars from "../assets/images/bars.svg"
import cancelWhite from "../assets/images/cancel-white.svg"

function Header(props) {
  const [burgerContentVisible, setBurgerContentVisible] = useState(false);

  const handleBurgerClick = () => {
    setBurgerContentVisible((prevVisible) => !prevVisible);
  };

  const burgerContent = document.getElementById("burger-content")

  window.onclick = function(event) {
    if (event.target == burgerContent) {
      burgerContent.style.display = "none";
    }
  }
  const burgerContentRef = useRef(null);
  const handleBurgerClose = () => {
    // Toggle the burgerContentVisible state only if it's currently visible
    if (burgerContentVisible) {
      setBurgerContentVisible(false);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (burgerContentRef.current && !burgerContentRef.current.contains(event.target)) {
        setBurgerContentVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);




  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    const header = document.querySelector('.headerContainer');
    const headerHeight = header.clientHeight;
    const scrollY = window.scrollY;

    
    setIsHeaderFixed(scrollY > headerHeight);
  };

 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`headerContainer ${isHeaderFixed ? 'fixed' : ''}`}>
      <div className="logo">
      <Link to="#home" smooth><img src={props.Logo} alt="Artemis Logo" /></Link>
      </div>
      <div className={`burger `} onClick={handleBurgerClick} >
      {burgerContentVisible ? <img src={cancelWhite} alt='burger menu'/> : <img src={bars} alt="close menu"/>}
      </div>
      <div className={`burger-content ${burgerContentVisible ? 'b-active' : 'hide'}`} id="burger-content">
        <ul>
          <li className={props.Linkclass || 'active'}>
            <Link smooth to="#home" onClick={handleBurgerClose}>
              HOME
            </Link>
          </li>
          <hr />
          <li>
            <Link smooth to="#ourSolution" onClick={handleBurgerClose}>
              ABOUT
            </Link>
          </li>
          <hr />
          <li onClick={handleBurgerClose}>
            <Link smooth to="#ourServices" >
              SERVICES
            </Link>
          </li>
          <hr />
          <li onClick={handleBurgerClose}>
            <Link smooth to="#ourSuccess">
              SUCCESS
            </Link>
          </li>
          <hr />
          <li onClick={handleBurgerClose}>
            <Link smooth to="#ourContact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="headerSide">
        <div>
          <ul>
            <li className={props.Linkclass || 'active'}>
              <Link smooth to="#section1">
                HOME
              </Link>
            </li>
            <li>
              <Link to="#ourSolution" smooth>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="#ourServices" smooth>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="#ourSuccess" smooth>
                SUCCESS
              </Link>
            </li>
            <li>
              <Link to="#ourContact" smooth>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
