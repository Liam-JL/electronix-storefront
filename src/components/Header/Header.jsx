import { IoSearch as SearchIcon, IoCartOutline as CartIcon, IoMenu as MenuIcon, IoStorefrontOutline as ShopIcon } from "react-icons/io5";
import Button from '../Button/Button';
import Logo from "../Logo/Logo";
import styles from './Header.module.css'
import { Link, useNavigate } from "react-router";
import { useCartContext } from '../../context/CartContext';
import { useEffect, useRef} from "react";


function Header() {


    return (
        <header className={styles.header}>
            <Link to="/"><Logo /></Link>
            <SearchBar /> 
            <Nav />
        </header>
    );
}

export function SearchBar() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        const searchTerm = e.target.search.value;
        e.target.search.value = '';
        navigate(`/store?search=${encodeURIComponent(searchTerm)}`)
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
    const badgeRef = useRef(null);

    function cartCount() {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }

    useEffect(() => {
        if (!badgeRef.current) return;
        const el = badgeRef.current;
        el.classList.add(styles.bump);
        const remove = () => el.classList.remove(styles.bump);
        el.addEventListener("animationend", remove, { once: true });
    }, [cartItems]);

    return(
        <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navUl}>
                <li>
                    <Link to="/store" aria-label="Go to Shop" className={styles.navLink}>
                        <ShopIcon className={styles.navIcon} />
                        <span className={styles.navLinkLabel}>SHOP</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" aria-label="Go to Cart" className={styles.navLink}> 
                        <CartIcon className={`${styles.navIcon} ${styles.tiltIcon}`} />
                        <span className={styles.navLinkLabel}>CART</span>
                        <span
                            ref={badgeRef} 
                            className={styles.navCartChip} 
                            aria-live="polite"
                        >
                            {cartCount()}
                        </span>
                    </Link>    
                </li>
            </ul>
        </nav>
    )
}


export default Header;

