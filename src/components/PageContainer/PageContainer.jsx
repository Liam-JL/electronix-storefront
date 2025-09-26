import styles from './PageContainer.module.css'
import { Route, Routes } from 'react-router'
import Landing from '../../pages/Landing/Landing'
import Store from '../../pages/Store/Store'

function PageContainer () {

    return (
        <main className={styles.pageContainer}>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/store' element={<Store />} />
                {/* <Route path="/store/:productId" element={<Product />} /> */}
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
            <div className={styles.pageBackground}></div>
        </main>
    )
}

export default PageContainer