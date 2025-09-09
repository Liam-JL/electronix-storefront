import styles from './Button.module.css'

function Button({onClick, icon = null, textContent = null, accented = false, ariaLabel = null}) {
    return (
        <button 
            onClick={onClick} 
            className={accented ? styles.accentedButton : styles.button}
            aria-label={ariaLabel}
        >
            {icon}
            {textContent}
        </button>
    )
}

export default Button