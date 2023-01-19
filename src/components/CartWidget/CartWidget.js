import './CartWidget.css'

const CartWidget = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <p className="number">1</p>
            <img alt='cart' src='./images/cart.png' width='' style={{cursor: 'pointer'}}/>
        </div>
    )
};

export default CartWidget;

 