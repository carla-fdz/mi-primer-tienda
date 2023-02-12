import './Cart.css';
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import {getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';

const Cart = () => {

    const {cart, clear, removeItem} = useContext(cartContext);
    const [form, setForm] = useState({
      name: '',
      phone: '',
      email: '',
    })
    const [order, setOrder] = useState({});
    const db = getFirestore();


    useEffect(() => {
      setOrder({
        buyer: {
          name: 'Raquel Diaz',
          phone: 542804589654,
          email: 'test@test.com',
        },
        items: cart.map((product) => {
          const {name, price, id} = product;
          return { name, price, id }
        }),
        total: cart.reduce((productoPasado, productoActual) => productoPasado + productoActual.price * productoActual.quantity, 0)
      });
    }, [cart]);

    if(cart.length === 0) {
      return <h3>No hay productos en tu carrito</h3>
    }

    const createOrder = () => {
      const querySnapshot = collection(db, 'orders');

      const currentOrder = {
        ...order,
        buyer: form,
      }

      addDoc(querySnapshot, currentOrder)
      .then((response) => {
        console.log(response.id);
        updateStockProducts();
        alert('Orden creada con éxito id' + response.id)
      })
      .catch(error => console.log(error))
    };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'items', product.id);
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {
        console.log('El producto actualizó su stock')
      })
      .catch((error) => console.log(error))
    })
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
    <div className='cart'>
      <ul className='cart--list'>
      {cart.map((product) => (
        <li key={product.id} >
          <div className='cart--product'>
            <div>
              <img alt={product.id} src={`/images/products/${product.image}`} width='100px'/>
            </div>
            <div className='cart--product__info'>
              <h4>{product.name}</h4>
              <p>{`Cantidad: ${product.quantity}`}</p>
              <p>{`Precio: $${product.price}`}</p>
              <button onClick={() => removeItem(product.id)} className='button--cart'>Eliminar del carrito</button>
            </div>
          </div>
        </li>
      ))}
      </ul>
      <div>
        <button onClick={() => clear()} className='button--cart'>Vaciar carrito</button>
      </div>

    </div>
    <div>
      <form className='form'>
        <input 
        name='name' 
        type='text' 
        className='form--input' 
        placeholder='Nombre'
        value={form.name}
        onChange={handleInput}
        />
        <input 
        name='phone' 
        type='text'
        className='form--input' 
        placeholder='Teléfono'
        value={form.phone}
        onChange={handleInput}

        />
        <input 
        name='email'
        type='email' 
        className='form--input'
        placeholder='Correo electrónico'
        value={form.email}
        onChange={handleInput}

        />
      </form>
      <div>
        <button onClick={createOrder} className='button--newOrder'>Crear orden</button>
      </div>
    </div>
    </div>
  )
}

export default Cart