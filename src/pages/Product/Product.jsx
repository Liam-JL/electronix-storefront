import { Link } from "react-router";
import { useProductsContext } from "../../context/ProductsContext";
import styles from './Product.module.css'
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";


function Product() {
    const [currentImage, setCurrentImage] = useState(0)

    const { products, loading, error } = useProductsContext();
    if (!Array.isArray(products)) return  <p>Not Available</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const pathNumber = Number(window.location.pathname.slice(window.location.pathname.search(":") + 1));
    const product = products.find(product => product.id === pathNumber);

    function handleImageSelect(e) {
        setCurrentImage(Number(e.currentTarget.getAttribute("data-index")));
    };
    
    return (
       
        <section className={styles.productContainer}>
                <div className={styles.imageSection}>
                    <div className={styles.currentImageContainer}>
                        <img
                            src={product.images[currentImage]}
                            className={styles.currentImage}
                            alt=""
                        />
                    </div>


                    <div className={styles.thumbnailGrid}>
                        {product.images.map((imageSrc, index) => 
                        <button 
                            key={index}
                            className={`${styles.imageSelector} ${currentImage === index ?  styles.active : ""}`} 
                            data-index={index}
                            onClick={handleImageSelect}
                            >
                            <img src={imageSrc} alt=""/>
                        </button>
                        )}
                    </div>

                </div>

                <div className={styles.descriptionSection}>
                    <ProductCard product={product} extended={true}/>
                </div>        
            </section>

                
    );
}

export default Product;

