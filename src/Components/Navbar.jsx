import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Components/utils/ThemeContext';

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className={isDarkTheme ? 'dark' : 'light'}>
      <img src="../images/DH.png" alt="logo Digital House" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div style={{padding: '0 0 0 121.29px'}}>
        <button onClick={toggleTheme}>◐</button>
      </div>
    </nav>
  );
};

export default Navbar;