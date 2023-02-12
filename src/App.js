import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Error from './pages/Error/Error';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Error/>}/>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
