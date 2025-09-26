import styles from './PageContainer.module.css'
import { Route, Routes } from 'react-router'
import Landing from '../../pages/Landing/Landing'
import Store from '../../pages/Store/Store'
import Cart from '../../pages/Cart/Cart'
import Error from '../../pages/Error/Error'
import Product from '../../pages/Product/Product'
import Checkout from '../../pages/Checkout/Checkout'

function PageContainer () {

    return (
        <main className={styles.pageContainer}>
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

export default PageContainer