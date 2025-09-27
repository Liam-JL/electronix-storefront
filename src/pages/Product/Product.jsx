import { Link } from "react-router";
import { useProductsContext } from "../../context/ProductsContext";
import styles from './Product.module.css'
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
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
        <div className={styles.pageContainer}>
            <Link to='/store'><span className={styles.backLink}><FaArrowLeft />Back to Shop</span></Link>
            <section className={styles.productContainer}>
                <div className={styles.imageSection}>

                    <img
                        src={product.images[currentImage]}
                        className={styles.currentImage}
                        alt=""
                    />

                    <div className={styles.thumbnailGrid}>
                        {product.images.map((imageSrc, index) => 
                        <button 
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

        </div>
    );
}

export default Product;

