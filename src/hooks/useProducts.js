import { useEffect, useState } from "react";

const STORAGE_KEY = "productsCache";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                 // Check cache first
                const cached = localStorage.getItem(STORAGE_KEY);
                if (cached) {
                    setProducts(JSON.parse(cached));
                    setLoading(false);
                    return;
                }

                // Otherwise fetch from API
                const response = await fetch("https://dummyjson.com/products?limit=0");

                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();

                // Save to state + cache
                setProducts(data.products);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data.products));
            
            } catch (error) {
                console.error("Error:", error);
                setError("Oops! Something went wrong while fetching products.");
            } finally {
                setLoading(false)
            }
        }

        fetchProducts();
    }, []);

    return { products, loading, error }
}