import { IoSearch as SearchIcon, IoCartOutline as CartIcon, IoMenu as MenuIcon, IoStorefrontOutline as ShopIcon } from "react-icons/io5";
import Button from '../Button/Button';
import styles from './Header.module.css'

function Header() {

    function openNavAside() {
        console.log("Nav Aside button clicked")
    }

    return (
        <header className={styles.header}>
            <Logo />
            <SearchBar /> 
            <Nav />
            <Button onClick={openNavAside} icon={<MenuIcon />} ariaLabel={"Open Nav Sidebar"}/> 
        </header>
    );
}

function Logo() {
    return (
        <a href="#" className={styles.logo}>
            <img src="../../../public/logoipsum-light.svg" alt="" />
            <h1>Electronix</h1>
        </a>
    )
}

export function SearchBar() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Search made")
    }

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="search"
                placeholder="Search products..."
                autoComplete="off"
                className={styles.input}
            />
            <button type="submit" className={styles.inputBtn} >
                <SearchIcon />
            </button>
        </form>
    )
}

export function Nav() {
    return(
        <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navUl}>
                <li>
                    <a href="#" aria-label="Go to Shop" className={styles.navLink}>
                        <ShopIcon className={styles.navIcon} />
                        <span>SHOP</span>
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Go to Cart" className={styles.navLink}> 
                        <CartIcon className={`${styles.navIcon} ${styles.tiltIcon}`} />
                        <span aria-live="polite">0</span>
                    </a>    
                </li>
            </ul>
        </nav>
    )
}


export default Header;

