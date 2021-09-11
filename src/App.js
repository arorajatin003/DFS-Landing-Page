import Header from './Components/header/header';
import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/aboutUs/About';
import Products from './Components/products/Products';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Intro />
      <About />
      <Products />
      {/* Contummers Review */}
      <Footer />
    </div>
  );
}

export default App;
