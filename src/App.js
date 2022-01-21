import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Informations from './components/Informations';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Informations />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
