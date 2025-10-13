import { useNavigate } from "react-router";
import styles from './SearchBar.module.css'
import {IoSearch as SearchIcon} from "react-icons/io5";

function SearchBar() {
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

export default SearchBar;
