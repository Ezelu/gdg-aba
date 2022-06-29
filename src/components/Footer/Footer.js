import React from 'react'
import styles from './Footer.module.css';
import GDG_LOGO from '../../assets/icons/Frame 61.png';
import twitter from '../../assets/icons/TwitterLogo.png' 
import facebook from '../../assets/icons/FacebookLogo.png' 
import instagram from '../../assets/icons/InstagramLogo.png' 




const Footer = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.logo}>
        <p> <img src={GDG_LOGO} alt="GDG Aba logo" /> </p>
        <p> copyright &copy; 2022 </p>
      </div>
      <div className={styles.icons}>
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
      </div>
    </div>
  )
}

export default Footer