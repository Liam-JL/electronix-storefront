import { IoSearch as SearchIcon, IoCartOutline as CartIcon, IoMenu as MenuIcon } from "react-icons/io5";
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
        <nav className={styles.nav}>
            
        </nav>
    )
}




export default Header;

