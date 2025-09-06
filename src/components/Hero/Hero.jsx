import styles from './Hero.module.css';
import Button from '../Button/Button';

function Hero() {

  function openShop() {
    console.log("cta button clicked")
  }

  return (
    <section className={styles.hero}>

        <div className={styles.heroLeftContainer}>
          <h1>Power Up Your Life with the Latest Tech</h1>
          <p>Discover cutting-edge electronics, unbeatable prices, and fast delivery - all in one place.</p>
          <Button onClick={openShop} textContent={"Shop Now"} accented={true}/>
        </div>

        <div className={styles.heroRightContainer}>
          <img src="../../../public/hero-image.png" alt="" />
        </div>
    </section>
  );
}

export default Hero;