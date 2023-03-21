import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atom';
import styles from './navbar.module.css';
import navbarRoutes from './navbar.routes';


function Navbar() {
  const navigate = useNavigate();

  const onNavClick = (link) => {
    navigate(link);
  };


  return (
    <div className={styles.navbar}>
        {navbarRoutes.map((nav) => (
          <Button key={nav.name} type="navbarbtn" onClick={() => onNavClick(nav.link)}>{nav.name}</Button> 
        ))}
    </div>
  )
}

export default Navbar;