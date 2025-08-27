import { useProducts } from "../shared/hooks/useProducts";

export default function Store() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredProducts = products.filter(product => 
        product.category == "laptops" ||
        product.category == "mobile-accessories" ||
        product.category == "smartphones" ||
        product.category == "tablets"
    )

    console.log(filteredProducts);
    
   return (
    <div>
        {filteredProducts.map(product => <div key={product.id}>
            <p>{product.title}</p>
            <img src={product.images[0]} alt="" width="50px" />
        </div>)}
    </div>
  );
}