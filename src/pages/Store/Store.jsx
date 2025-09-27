import { useProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Store.module.css'
import { useState } from "react";
import { SiStyleshare } from "react-icons/si";

function Store() {
    const [activeCategory, setActiveCategory] = useState("all");

    function handleFilterButton(e) {
        setActiveCategory(e.target.getAttribute("data-category"))
    }

    return (
        <section className={styles.store} aria-label="Main Store Page">
            <header className={styles.header}>
                <h1>Our Collection</h1>
                <p>Explore the latest electronics, hand-picked to power your everyday life with style and performance.</p>
            </header>
            <section>
                <FilterBar activeCategory={activeCategory} handleFilterButton={handleFilterButton}/>
                <ProductGrid activeCategory={activeCategory}/>
            </section>
        </section>
    );
}

function FilterBar( {activeCategory, handleFilterButton} ) {


    return (
        <div className={styles.filterBar}>
            <button data-category="all" className={`${styles.filterButton} ${activeCategory === "all" ? styles.active : ""}`} onClick={handleFilterButton}>All</button>
            <button data-category="smartphones" className={`${styles.filterButton} ${activeCategory === "smartphones" ? styles.active : ""}`} onClick={handleFilterButton} >Smartphones</button>
            <button data-category="laptops" className={`${styles.filterButton} ${activeCategory === "laptops" ? styles.active : ""}`} onClick={handleFilterButton}>Laptops</button>
            <button data-category="tablets" className={`${styles.filterButton} ${activeCategory === "tablets" ? styles.active : ""}`} onClick={handleFilterButton}>Tablets</button>
            <button data-category="mobile-accessories" className={`${styles.filterButton} ${activeCategory === "mobile-accessories" ? styles.active : ""}`} onClick={handleFilterButton}>Accessories</button>
        </div>
    )
}

function ProductGrid( {activeCategory}) {
    const { products, loading, error } = useProductsContext();

    if (!Array.isArray(products)) return  <p>No Products Available</p>
    if (loading) return <p>Loading Products...</p>
    if (error) return <p>{error}</p>

    function filtered(products) {
        
        if(activeCategory === "all") {
            return products.filter((product) => 
                product.category === "smartphones" ||
                product.category === "laptops" ||
                product.category === "tablets" ||
                product.category === "mobile-accessories"
            )
        }

        return products.filter((product) => product.category === activeCategory);
    }

    return (
        <div className={styles.productGridContainer}>
            <ul className={styles.productGrid}>
                {filtered(products).map((product) => (
                    <li key={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Store;

