import { Link } from "react-router";
import { useCartContext } from "../../context/CartContext";
import styles from './Cart.module.css'
import { CiDeliveryTruck } from "react-icons/ci";
import CartItemCard from "../../components/CartItem/CartItemCard";


function Cart() {
    const {cartItems} = useCartContext();

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.header}>
                <h1>Cart</h1>
                <p>Review Your items before proceeding to checkout</p>
            </header>
            {cartItems.length < 1 && <EmptyCart />}
            {cartItems.length > 0 && <ItemList/>}
            {cartItems.length > 0 && <SummaryCard />}
        </section>
    );
}

export function EmptyCart() {
    return (
        <div className={styles.emptyCart}>
            <span>Your cart is currently empty.</span>
            <Link to='/store'><button className={styles.continueButton}>Continue Shopping</button></Link>
        </div>
    )
}


export function ItemList() {
    const {cartItems} = useCartContext();
    return (
        <section className={styles.itemList}>
            {cartItems.map(item => <CartItemCard item={item}/>)}
            <footer className={styles.itemListFooter}><CiDeliveryTruck /> You can choose your delivery preferences at checkout</footer>
        </section>
    )
}

export function SummaryCard () {
    return (
        <aside className={styles.summaryCard}>

        </aside>
    )
}


export default Cart;

