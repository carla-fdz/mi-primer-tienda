import './ItemCount.css'
import { useState } from "react";
// import LifeCycle from "../LifeCycle";


const ItemCount = () => {

  const [counter, setCounter] = useState(1);
  // primero el nombre de la variable y segundo el nombre del método que va actualizar el valor

  const stock = 10;

  const sumar = () => {
    if(stock === counter){
      alert('No puedes comprar más de lo que hay disponible');
      return;
    }
    setCounter(counter + 1)

    //Otra opción:
    // if(counter<stock){
    //   setCounter(counter + 1)
    // }
  }

  const restar = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter - 1)
  }

  return (
    <div className='counter'>

      <div className='controllers'>
        <button onClick={() => restar()}>-</button>
        <span>{counter}</span>
        <button onClick={() => sumar()}>+</button>
        {/* {counter < 10 ? <LifeCycle contador={counter}/> : (null)} */}
      </div>

      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;
