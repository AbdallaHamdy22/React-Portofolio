import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/portfolio';
import Skill from './components/Skills/Skill';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Footer/>
    </div>
  );
}

export default App;
