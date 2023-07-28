import React, { useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header(props) {
  const [burgerContentVisible, setBurgerContentVisible] = useState(false);

  const handleBurgerClick = () => {
    setBurgerContentVisible((prevVisible) => !prevVisible);
  };


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
      <div className={`burger `} onClick={handleBurgerClick}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className={`burger-content ${burgerContentVisible ? 'b-active' : 'hide'}`}>
        <ul>
          <li className={props.Linkclass || 'active'}>
            <Link smooth to="#home">
              HOME
            </Link>
          </li>
          <hr />
          <li>
            <Link smooth to="#ourSolution">
              ABOUT
            </Link>
          </li>
          <hr />
          <li>
            <Link smooth to="#ourServices">
              SERVICES
            </Link>
          </li>
          <hr />
          <li>
            <Link smooth to="#ourSuccess">
              SUCCESS
            </Link>
          </li>
          <hr />
          <li>
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
