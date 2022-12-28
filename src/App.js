import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const welcome = 'Tienda smartwatch';
  return (
    <div className="App">
      <Navbar name={welcome}/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
