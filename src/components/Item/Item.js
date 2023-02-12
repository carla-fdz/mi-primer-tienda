import './Item.css';

const Item = ({producto}) => {
  return (
    <li>
        <div className='item'>
          <img alt={producto.title} src={`/images/products/${producto.imageId}`} width='100%'/>
          <h2 className='item--title'>{producto.title}</h2>
          <p className='item--category'>{producto.categoryId}</p>
          <p className='item--description'>{producto.description}</p>
          <p className='item--price'>{`$${producto.price}`}</p>
        </div>
    </li>
  )
};

export default Item; 

//siempre poner el alt en la img para que no salte error