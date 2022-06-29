import React from 'react';
import GDG1 from '../../assets/icons/GDG12.png'
import Ellipse3big from '../../assets/images/Ellipse 3b.png';
import Ellipse3 from '../../assets/images/Ellipse 3.png';
import Ellipse30 from '../../assets/images/Ellipse 30.png';
import Ellipse300 from '../../assets/images/Ellipse 300.png';
import Ellipse4 from '../../assets/images/Ellipse 4.png';
import Ellipse8 from '../../assets/images/Ellipse 8.png';
import Ellipse10 from '../../assets/images/Ellipse 10.png';
import Ellipse12 from '../../assets/images/Ellipse 12.png';
import styles from './Hero.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos'



const Hero = () => {


  React.useEffect(() => {
    Aos.init({duration: 2000,})
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>
          <p data-aos="fade-up" className={styles.blue}> Connect.</p>
          <p data-aos="fade-up" className={styles.red}> Learn.</p>
          <p data-aos="fade-up" className={styles.green}> Grow.</p>
        </h2>
      </div>

      <div className={styles.illustration}>
        <aside className={styles.big_img}>
          <img src={Ellipse3big} />
        </aside>

        <img src={Ellipse4} className={styles.ellipse4} />
        <img src={Ellipse8} className={styles.ellipse8} />
        <img src={Ellipse10} className={styles.ellipse10} />
        <img src={Ellipse12} className={styles.ellipse12} />

        <img src={Ellipse30} className={styles.grey1} />
        <img src={Ellipse30} className={styles.grey2} />
        <img src={Ellipse30} className={styles.grey3} />
        <img src={Ellipse3} className={styles.blue} />
        <img src={Ellipse30} className={styles.grey5} />
        <img src={Ellipse300} className={styles.yellow} />
      </div>
    </div>
  )
}

export default Hero