import React from 'react';
import Tabs from './Tabs';
import styles from './CommunityProjects.module.css';
import Carousel from './Carousel';




const CommunityProjects = () => {
  return (
    <div id="communityProjects" className={styles.container}>
      <aside className={styles.tabs}>
        <h2> Community Projects </h2>
        <Tabs />
      </aside>

      <Carousel />
    </div>
  )
}

export default CommunityProjects