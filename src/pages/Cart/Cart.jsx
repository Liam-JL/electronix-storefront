import { Link } from "react-router";
import { useCartContext } from "../../context/CartContext";
import { useRef } from "react";
import CartItemCard from "../../components/CartItem/CartItemCard";
import CheckoutDialog from "../../components/CheckoutDialog/CheckoutDialog";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import styles from './Cart.module.css'

function Cart() {
    const {cartItems} = useCartContext();
    const checkoutDialogRef = useRef();

    function toggleCheckoutDialog() {
        if (!checkoutDialogRef.current) return;
        checkoutDialogRef.current.hasAttribute("open") ? 
            checkoutDialogRef.current.close() : 
            checkoutDialogRef.current.showModal();
    }

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.header}>
                <h1>Cart</h1>
                <p className={styles.sectionMessage}><CiDeliveryTruck /> You can choose your payment and delivery preferences at checkout</p>
            </header>
            {cartItems.length < 1 && <EmptyCart />}
            {cartItems.length > 0 &&
                <div className={styles.sectionMain}>
                    <ItemList />
                    <SummaryCard toggleCheckoutDialog={toggleCheckoutDialog}/>
                </div>
            }
        <CheckoutDialog toggleCheckoutDialog={toggleCheckoutDialog} ref={checkoutDialogRef} />
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
            {cartItems.map(item => <CartItemCard key={item.id} item={item}/>)}
            <Link to='/store' className={styles.backLink}><FaArrowLeft /><span>Continue Shopping</span></Link>
        </section>
    )
}

export function SummaryCard ({ toggleCheckoutDialog }) {
    const {cartItems} = useCartContext();

    function calcSubtotal() {
        let subtotal = 0;
        for(const item of cartItems) {
            subtotal = subtotal + (item.price * item.quantity)
        }
        
        return subtotal
    }

    function calcShipping() {
        const subtotal = calcSubtotal();
        return subtotal >= 50 ? 0 : 4.99;
    }
    
    function formatGBP(n) {
    return `£${n.toFixed(2)}`;
    }

    return (
        <aside className={styles.summaryCard}>
            <h1>Order Summmary</h1>
            
            <div className={styles.summaryMain}>
                <span>
                    <span>Subtotal</span>
                    <span>{formatGBP(calcSubtotal())}</span>
                </span>

                <span>
                    <span>Shipping</span>
                    <span>{formatGBP(calcShipping())}</span>
                </span>
            </div>

            <footer className={styles.summaryFooter}>
                <span className={styles.total}><h2>Total</h2><span>{formatGBP(calcSubtotal() + calcShipping())}</span></span>
                <button className={styles.checkoutBtn} onClick={toggleCheckoutDialog}>Checkout</button>
            </footer>
        </aside>
    )
}

export default Cart;

