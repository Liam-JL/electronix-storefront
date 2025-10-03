import styles from './PageContainer.module.css'
import { Route, Routes, useLocation } from 'react-router'
import { useRef, useLayoutEffect } from 'react'
import Landing from '../../pages/Landing/Landing'
import Store from '../../pages/Store/Store'
import Cart from '../../pages/Cart/Cart'
import Error from '../../pages/Error/Error'
import Product from '../../pages/Product/Product'
import Checkout from '../../pages/Checkout/Checkout'

function PageContainer () {
    const containerRef = useRef(null);

    return (
        <main className={styles.pageContainer}>
            <ScrollToTop containerRef={containerRef} />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/store' element={<Store />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/store/:productId" element={<Product />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <div className={styles.pageBackground}></div>
        </main>
    )
}

function ScrollToTop({ containerRef }) {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (containerRef?.current) containerRef.current.scrollTop = 0;
  }, [pathname, containerRef]);
  return null;
}

export default PageContainer

