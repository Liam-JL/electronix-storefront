import Hero from '../../components/Hero/Hero';
import styles from './Landing.module.css'

function Landing() {
    return (
        <div className={styles.landing}>
            <Hero />
        </div>
    );
}
export default Landing;

