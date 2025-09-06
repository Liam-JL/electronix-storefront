import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero}>
        <h1>Power Up Your Life with the Latest Tech</h1>
        <p>Discover cutting-edge electronics, unbeatable prices, and fast delivery - all in one place.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;