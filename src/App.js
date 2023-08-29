import './App.css';
import Navbar from './components/navbar';
import User from './components/users/user';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <User/>
      </div>
    </div>
  );
}

export default App;
