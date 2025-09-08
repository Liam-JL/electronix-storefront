import { IoSearch as SearchIcon, IoCartOutline as CartIcon } from "react-icons/io5";
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <Logo />        
        </header>
    );
}

function Logo() {
    return (
        <span className={styles.logo}>
            <img src="../../../public/logoipsum-light.svg" alt="" />
            <h1>Electronix</h1>
        </span>
    )
}

export default Header;

