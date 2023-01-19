// import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {

  const welcome = 'Diamond';

  return (
    <BrowserRouter>
      <Navbar name={welcome}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenido'/>}/>
        <Route path='item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path=''/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
