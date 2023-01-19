import './ItemListContainer.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const { category } = useParams();

    // const categorias = () => {
    //     alert('En proceso');
    // };

    // Simular petición a una API
    // const getProducts  = new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([
    //             {name:'producto 1', id:1},
    //             {name:'producto 2', id:2},
    //             {name:'producto 3', id:3},
    //             {name:'producto 4', id:4},
    //             {name:'producto 5', id:5},
    //             {name:'producto 6', id:6},
    //             {name:'producto 7', id:7},
    //         ]);
    //     }, 2000);
    // });


    const getProducts = fetch(`https://fakestoreapi.com/products`, {
        method: 'GET',
        headers: {
            'content-type': 'json',
        }
    })
    ;

    useEffect(() => {
        getProducts
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            setProducts(response);
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        if(category){
        const removeCharacters = category.includes('%20') ? category.replace('%20', '') : category;
        const filterProducts = products.filter((product) => product.category === removeCharacters);
        setFilteredProducts(filterProducts);
        }
    }, [category])


    //Declaro un state con useState para poder utilizar response fuera de ese scope
    return (
        <div>
            {greeting}
            {/* <button onClick={categorias}>Ver productos</button> */}
            <ItemCount/>
            <ItemList productos={category ? filteredProducts : products}/>
            {/* <ul>
                {products.map((producto) => (
                    <li key={producto.id}>{producto.name}</li>
                ))}
            </ul> */}
        </div>
    )
};

export default ItemListContainer;