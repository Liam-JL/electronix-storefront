import styles from './Button.module.css'

function Button({onClick, icon = null, textContent = null, accented = false}) {
    return (
        <button onClick={onClick} className={accented ? styles.accentedButton : styles.button}>
            {icon ? icon : ""}
            {textContent ? textContent : ""}
        </button>
    )
}

export default Button