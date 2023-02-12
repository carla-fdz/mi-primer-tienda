import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import './CartWidget.css'

const CartWidget = () => {
    const {cart} = useContext(cartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            cart?.reduce((prev, curr) => {
                console.log(prev, curr);
                return prev + curr.quantity;
            }, 0)
        )
    }, [cart])

    
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="number">{total}</p>
            <img alt='cart' src='/images/cart-blanco.png' width='40px' style={{cursor: 'pointer'}}/>
        </div>
    )
};

export default CartWidget;

 