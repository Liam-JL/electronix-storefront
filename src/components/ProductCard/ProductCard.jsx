import styles from './ProductCard.module.css' 
import {IoCartOutline as CartIcon} from "react-icons/io5";
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from 'react';

function ProductCard({product, extended=false}) {
    const [currentQuantity, setCurrentQuantity] = useState(1);

    function handleAddToCart() {
        console.log("Add to cart button clicked")
    };

    function increaseQuantity() {
         if (currentQuantity < 10) setCurrentQuantity(currentQuantity +1)
    };

    function decreaseQuantity() {
        if (currentQuantity === 1) return
        setCurrentQuantity(currentQuantity - 1)
    };

    return (
        <article className={`${styles.card} ${extended && styles.extended}`}>
            <Link to={`:${product.id}`} className={styles.imageLink}>
                <img src={product.images[0]} alt=''  className={styles.productImage}/>
            </Link>

            {extended && <Link to='/store' className={styles.backLink}><FaArrowLeft /><span>Back to Shop</span></Link>}
        
            <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <span className={styles.price}>{`£${product.price}`}</span>
            </div>

                {extended && <p className={styles.description}>{product.description}</p>}

            <footer className={styles.actions}>
                <div className={styles.quantityWrapper}>
                    <label className="sr-only" for={`quantity-${product.id}`}>{`Quantity for: ${product.title}`}</label>
                    <button className={styles.quantityButton} aria-label='Decrease quantity' onClick={decreaseQuantity}>-</button>
                    <input 
                        className={styles.quantityInput} 
                        type="number" 
                        min={1} 
                        value={currentQuantity} 
                        id={`quantity-${product.id}`}
                        onChange={e => {
                            const value = Math.max(1, Math.min(10, Number(e.target.value)));
                            setCurrentQuantity(value);
                        }}
                    />
                    <button className={styles.quantityButton} aria-label='Increase quantity' onClick={increaseQuantity}>+</button>
                </div>
                <button className={styles.addButton} onClick={handleAddToCart}><CartIcon /> Add</button>
            </footer>
        </article>
    )
}

export default ProductCard;