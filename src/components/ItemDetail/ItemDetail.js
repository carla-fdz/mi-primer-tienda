import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({product}) => {
  const  { addItem } = useContext(cartContext);
  const [counter, setCounter] = useState(1);

  return (
    <div>
        <div className='itemDetail'>

          <div className='itemDetail--img'>
            <img alt={product.title} src={`/images/products/${product.imageId}`} className='imgDetail'/>
          </div>

          <div className='itemDetail--info'>
            <h2 className='item--title'>{product.title}</h2>
            <p className='item--category'>{product.categoryId}</p>
            <p className='item--description'>{product.description}</p>
            <p className='item--price'>{`$${product.price}`}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount 
              counter={counter} 
              setCounter={setCounter} 
              stock={product.stock}/>
            <button onClick={() => addItem(product, counter)} className='button--addItem'>Agregar al carrito</button>
          </div>

        </div>
    </div>
  )
}

export default ItemDetail;