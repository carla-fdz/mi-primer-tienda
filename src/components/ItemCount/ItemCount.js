import './ItemCount.css'

const ItemCount = ({counter, setCounter, stock}) => {

  const onAdd = () => {
    if(stock === counter){
      alert('No puedes comprar más de lo que hay disponible');
      return;
    }
    setCounter(counter + 1)
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
        <button onClick={() => restar()} className='controllers--symbol'>-</button>
        <span>{counter}</span>
        <button onClick={() => onAdd()} className='controllers--symbol'>+</button>
      </div>

    </div>
  )
}

export default ItemCount;
