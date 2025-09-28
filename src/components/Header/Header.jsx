import { IoSearch as SearchIcon, IoCartOutline as CartIcon, IoMenu as MenuIcon, IoStorefrontOutline as ShopIcon } from "react-icons/io5";
import Button from '../Button/Button';
import Logo from "../Logo/Logo";
import styles from './Header.module.css'
import { Link } from "react-router";
import { useCartContext } from '../../context/CartContext';

function Header() {

    function openNavAside() {
        console.log("Nav Aside button clicked")
    }

    return (
        <header className={styles.header}>
            <Link to="/"><Logo /></Link>
            <SearchBar /> 
            <Nav />
            <Button onClick={openNavAside} icon={<MenuIcon />} ariaLabel={"Open Nav Sidebar"}/> 
        </header>
    );
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
    const {cartItems} = useCartContext();

    function cartCount() {
        let count = 0;
        for (const item of cartItems) {
            count = count + item.quantity
        }
        return count;
    }

    return(
        <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navUl}>
                <li>
                    <Link to="/store" aria-label="Go to Shop" className={styles.navLink}>
                        <ShopIcon className={styles.navIcon} />
                        <span>SHOP</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" aria-label="Go to Cart" className={styles.navLink}> 
                        <CartIcon className={`${styles.navIcon} ${styles.tiltIcon}`} />
                        <span aria-live="polite">{cartCount()}</span>
                    </Link>    
                </li>
            </ul>
        </nav>
    )
}


export default Header;

