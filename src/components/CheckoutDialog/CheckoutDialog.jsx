import { forwardRef } from "react";
import { useCartContext } from "../../context/CartContext";
import styles from './CheckoutDialog.module.css'

const CheckoutDialog = forwardRef(({ toggleCheckoutDialog}, ref) => {
    const {clearCart} = useCartContext();

    function handleClick() {
        toggleCheckoutDialog();
        clearCart()
    }

    return (
        <dialog
            className={styles.dialog}
            ref={ref}
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    toggleCheckoutDialog();
                }
            }}
        >
            <div className={styles.dialogContent}>
                <img className={styles.dialogImage} src="https://avatars.githubusercontent.com/u/48105423?s=400&u=4a19feb6b185ec70a730eba94b920e9d634f1f9a&v=4" alt="LiamLJ Github profile picture" />
                <p>Thank you for checking out this demo e-commerce app. You can explore more of my projects on my <a href="https://github.com/Liam-JL">GitHub</a>. <span role="img" aria-label="smile">😊</span></p>
                <button className={styles.clearButton} onClick={handleClick}>Clear Cart</button>
            </div>

        </dialog>
    )
})

export default CheckoutDialog;