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
                    Quantity stuff
                </div>
                <Button onClick={handleAddToCart} icon={<CartIcon />}  textContent={"Add"} accented={true} />
            </footer>
        </article>
    )
}

export default ProductCard;