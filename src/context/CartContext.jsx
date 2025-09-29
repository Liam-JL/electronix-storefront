import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity = 1) {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                return prevItems.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                );
            }
            return [...prevItems, {...product, quantity}]
         })
    }

    function updateCart(product, quantity = 1) {
        setCartItems(prevItems => {
            return prevItems.map(item => 
                item.id === product.id ? {...item, quantity} : item
            );
        })
    }

    function removeFromCart(productId) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }

    function clearCart() {
        setCartItems([])
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider 
        value={{cartItems, addToCart, updateCart, removeFromCart, clearCart}}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}