import styles from './ProductCard.module.css' 
import {IoCartOutline as CartIcon} from "react-icons/io5";
import Button from '../Button/Button';

function ProductCard({product}) {

    function handleAddToCart() {
        console.log("Add to cart button clicked")
    }

    return (
        <article className={styles.card}>
            <a href='#' className={styles.imageLink}>
                <img src={product.images[0]} alt=''  className={styles.productImage}/>
            </a>
        
            <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <span className={styles.price}>{`£${product.price}`}</span>
            </div>

            <footer className={styles.actions}>
                <div className={styles.quantityWrapper}>
                    <label className="sr-only" for={`quantity-${product.id}`}>{`Quantity for: ${product.title}`}</label>
                    <button className={styles.quantityButton} aria-label='Decrease quantity'>-</button>
                    <input className={styles.quantityInput} type="number" min={1} value={1} id={`quantity-${product.id}`}/>
                    <button className={styles.quantityButton} aria-label='Increase quantity'>+</button>
                </div>
                <button className={styles.addButton} onClick={handleAddToCart}><CartIcon /> Add</button>
            </footer>
        </article>
    )
}

export default ProductCard;