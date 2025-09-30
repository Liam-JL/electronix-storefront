import { useCartContext } from "../../context/CartContext";
import styles from './CartItemCard.module.css';
import { FaTrash } from "react-icons/fa";

function CartItemCard({item}) {
    const {updateCart, removeFromCart} = useCartContext();

    const options = [];
    const maxQuantity = item.currentStock || 10;
    for (let i = 1; i <= maxQuantity; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    
    return (
        <article className={styles.itemCard}>
            <div className={styles.thumbnailContainer}>
                <img
                    src={item.thumbnail}
                    className={styles.thumbnail}
                    alt=""
                />
            </div>

            <section className={styles.itemDetails}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.itemCardMain}>
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <select 
                        name="quantity" 
                        id={`quantity-${item.id}`}
                        defaultValue={item.quantity || 1}
                        onChange={(e) => updateCart(item, Number(e.target.value))}
                    >
                        {options}
                    </select>
                    <button 
                        aria-label="Remove Item" 
                        onClick={() => removeFromCart(item.id)}
                        className={styles.removeButton}
                    >
                        <FaTrash />
                    </button>
                    <span className={styles.price}>{`£${(item.price * item.quantity).toFixed(2)}`}</span>
                </div>
            </section>
        </article>
    )
}

export default CartItemCard;
