import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContainer from './components/PageContainer/PageContainer';
import styles from './App.module.css'
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';


function App() {

  return (
    <div className={styles.app}>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <AppContainer>
              <Header />
              <PageContainer />
              <Footer />
            </AppContainer>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </div>
  )
}


function AppContainer( {children}) {
  const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

  return (
    <div className={styles.appContainer}>
      {children}
    </div>
  )
}

export default App
