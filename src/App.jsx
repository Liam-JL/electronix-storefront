import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContainer from './components/PageContainer/PageContainer';
import Landing from './pages/Landing/Landing';
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
      <Background />
      <Header />
      <PageContainer>
        <Landing />
      </PageContainer>
      <Footer />
    </div>
  )
}

export default App
