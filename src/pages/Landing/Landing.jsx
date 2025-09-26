import Hero from '../../components/Hero/Hero';
import styles from './Landing.module.css'

function Landing() {
    return (
        <section className={styles.landing}>
            <Hero />
        </section>
    );
}
export default Landing;

