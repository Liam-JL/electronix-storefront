import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const { products, loading, error } = useProducts();

    return (
        <ProductsContext.Provider value={{ products, loading, error }} >
            { children }
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    return useContext(ProductsContext);
}