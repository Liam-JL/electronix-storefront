import styles from './ProductCard.module.css' 
import {IoCartOutline as CartIcon} from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

function ProductCard({product, extended=false}) {
    const {addToCart} = useCartContext();
    const [currentQuantity, setCurrentQuantity] = useState(1);

    function handleAddToCart() {
        addToCart(product, currentQuantity);
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
            <Link to={`:${product.id}`} className={styles.imageLink}  onClick={() => window.scrollTo(0, 0)}>
                <img src={product.images[0]} alt='' className={styles.productImage}/>
            </Link>

            {extended && <Link to='/store' className={styles.backLink}><FaArrowLeft /><span>Back to Shop</span></Link>}
        
            <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <span className={styles.price}>{`£${product.price}`}</span>
            </div>

                {extended && <p className={styles.description}>{product.description}</p>}

            <footer className={styles.actions}>
                <div className={styles.quantityWrapper}>
                    <label className="sr-only" htmlFor={`quantity-${product.id}`}>{`Quantity for: ${product.title}`}</label>
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
                <AddButton handleAddToCart={handleAddToCart} />
            </footer>
        </article>
    )
}

function AddButton({ handleAddToCart }) {
    const [clicked, setClicked] = useState(false);

    function handleClick(e) {
        handleAddToCart(e);
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    }

    return (
        <button className={styles.addButton} onClick={handleClick}>
            <CartIcon />
            <span className={styles.addButtonText}>
                <span className={clicked ? styles.hidden : styles.visible}>Add</span>
                <span className={clicked ? styles.visible : styles.hidden}>Added</span>
            </span>
        </button>
    );
}

export default ProductCard;