import { IoCartOutline as CartIcon, IoStorefrontOutline as ShopIcon } from "react-icons/io5";
import Logo from "../Logo/Logo";
import styles from './Header.module.css'
import { useCartContext } from '../../context/CartContext';
import { useEffect, useRef} from "react";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";



function Header() {


    return (
        <header className={styles.header}>
            <Link to="/"><Logo /></Link>
            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>
            <Nav />
        </header>
    );
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

