import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        let newCart;
        let product = cart.find((prod) => prod.id === item.id);

        if(product) {
            product.quantity += quantity;
            if(product.quantity >= product.stock){
                alert('No hay más stock disponible')
                return;
            }
            newCart = [...cart];
        } else {
            product = {
                id: item.id,
                name: item.title,
                category: item.categoryId,
                price: item.price,
                quantity: quantity,
                image: item.imageId,
                stock: item.stock,
                description: item.description,
            };
            newCart = [...cart, product];
            }
            setCart(newCart);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((product) => product.id !== itemId));
    };

    const clear = () => {
        setCart([]);
    };


  return (
    <cartContext.Provider value={{cart, addItem, clear, removeItem}}>
        {/* recibe toda la app como children */}
        {children}
    </cartContext.Provider>
    )}

export default CartProvider;