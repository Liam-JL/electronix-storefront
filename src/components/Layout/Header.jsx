import { IoSearch as SearchIcon, IoCartOutline as CartIcon } from "react-icons/io5";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <HeaderTop />
            <Navbar />
        </header>
    )
}

export function HeaderTop() {
    return (
        <div>
            <a href="#" id="electronix-logo" aria-label="electronix-logo">
                <img src="src/shared/assets/logoipsum-light.svg" alt="" />
                <span className="audiowide-regular" style={{color: "black"}}>Electronix</span>
            </a>
            <div id="nav-searchbar">
                <input 
                type="search" 
                placeholder="Search the store..."
                aria-label="Search through store products"></input>
                <button>
                    <SearchIcon />
                </button>
            </div>
            <button aria-label="open-shopping-cart">
                <CartIcon />
            </button>
        </div>
    )
}