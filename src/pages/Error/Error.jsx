import { Link } from 'react-router';
import styles from './Error.module.css'

function Error() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Error</h1>
            <span>Page not found</span>
            <Link to={'/'}><button className={styles.returnButton}>Return Home</button></Link>
        </div>
    );
}

export default Error;

