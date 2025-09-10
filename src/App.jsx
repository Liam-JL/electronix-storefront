import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContainer from './components/PageContainer/PageContainer';
import Landing from './pages/Landing/Landing';
import Store from './pages/Store/Store';
import styles from './App.module.css'
import { ProductsProvider } from './context/ProductsContext';

function App() {

  return (
    <div className={styles.app}>
      <ProductsProvider>
        <Header />
        <PageContainer>
          {/* <Landing /> */}
          <Store />
        </PageContainer>
        <Footer />
      </ProductsProvider>
    </div>
  )
}

export default App
