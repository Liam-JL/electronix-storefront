import styles from './Logo.module.css'

function Logo({small = false, dark = false}) {
    return (
        <span className={small ? styles.smallLogo : styles.logo}>
            <img 
                src={`../../../public/logoipsum-${dark ? "dark" : "light"}.svg`} 
                alt=""
            />
            <h1 className={dark ? styles.dark : ""}>Electronix</h1>
        </span>
    )
}

export default Logo