import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({producto}) => {
  return (
    <li>
        <div className='item'>
          <img alt={producto.title} src={producto.image} width='200'/>
          <h2>{producto.title}</h2>
          <h3>{producto.category}</h3>
          <p>{producto.description}</p>
        </div>
        <ItemCount/>
    </li>
  )
};

export default Item; 

//siempre poner el alt en la img para que no salte error