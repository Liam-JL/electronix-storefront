import { useProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Store.module.css'

function Store() {
    return (
        <main className={styles.store} aria-label="Main Store Page">
            <header>
                <h1>Our Collection</h1>
                <p>Explore the latest electronics, hand-picked to power your everyday life with style and performance.</p>
            </header>
            <section>
                <FilterBar />
                <ProductGrid />
            </section>
        </main>
    );
}

function FilterBar() {
    return (
        <div></div>
    )
}

function ProductGrid() {
    const { products, loading, error } = useProductsContext();

    if (loading) return <p>Loading Products...</p>
    if (error) return <p>{error}</p>

    function filtered(products, category) {
        return products.filter((product) => product.category === category);
    }

    return (
        <div className={styles.productGridContainer}>
            <ul className={styles.productGrid}>
                {filtered(products, "smartphones").map((product) => (
                    <li key={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Store;

