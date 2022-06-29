import React from 'react'
import styles from './About.module.css';
import image from '../../assets/images/Rectangle 1.png';




const About = () => {
  return (
    <div className={styles.container} id="about">
      <aside>
      <h2> About GDG Aba </h2> 
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est, ultrices dui pretium
            dolor nec tortor. Volutpat sed at amet eu etiam. Sapien morbi ut quis amet, massa
            ultricies quis. At aenean a viverra viverra ornare fermentum suscipit ut. Congue. 
        </p>
      </aside>
      <img src={image} alt="People learning in a conference" />
    </div>
  )
}

export default About