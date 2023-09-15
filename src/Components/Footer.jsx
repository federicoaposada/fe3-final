import React from 'react'
import { useTheme } from '../Components/utils/ThemeContext';

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer className={isDarkTheme ? 'dark' : 'light'}>
      <div>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
      </div>
      <div>
        <img src="../images/ico-facebook.png" alt="logo facebook" />
        <img src="../images/ico-instagram.png" alt="logo instagram" />
        <img src="../images/ico-tiktok.png" alt="logo tiktok" />
        <img src="../images/ico-whatsapp.png" alt="logo whatsapp" />
      </div>
    </footer>
  )
}

export default Footer
