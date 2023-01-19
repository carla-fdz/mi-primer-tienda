import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
  return (
    <div className='products'>
        <div className='item'>
            <img alt={product.title} src={product.image} width='200'/>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>{product.description}</h3>
        </div>
        <ItemCount/>

    </div>
  )
}

export default ItemDetail