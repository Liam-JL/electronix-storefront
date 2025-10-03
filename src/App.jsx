import { BrowserRouter } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContainer from './components/PageContainer/PageContainer';
import ScrollToTop from './components/ScrollToTop';
import styles from './App.module.css'
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <div className={styles.app}>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
          <ScrollToTop />
            <Header />
            <PageContainer />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
