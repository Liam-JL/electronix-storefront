import styles from './Hero.module.css';
import { Link } from 'react-router';

function Hero() {

  return (
    <div className={styles.hero}>

        <div className={styles.heroLeftContainer}>
          <h1>Power Up Your Life with the Latest Tech</h1>
          <p>Discover cutting-edge electronics, unbeatable prices, and fast delivery - all in one place.</p>
          <Link to={"/store"}><button type='submit' className={styles.heroButton}>Shop Now</button></Link>
        </div>

        <div className={styles.heroRightContainer}>
          <img src="/hero-image.png" alt="" />
        </div>
    </div>
  );
}

export default Hero;