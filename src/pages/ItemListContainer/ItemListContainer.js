import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const { category } = useParams();


    const getProducts = () => {
        const dataBase = getFirestore();
        const itemsCollection = collection(dataBase, 'items');

        if(category){
            const newConfiguration = query(itemsCollection, where('categoryId', '==', category));
            getDocs(newConfiguration)
            .then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setLoading(false);
                setProducts(data);
            })
            .catch(error => console.log(error));
        } else {
            getDocs(itemsCollection)
            .then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
                setLoading(false);
                setProducts(data);
            })
            .catch((error) => console.log(error));
        }
};  

    useEffect(() => {
        getProducts();
    }, [category])

    return (
        <div className='itemListContainer'>
            {loading ? <Loading/> : <ItemList productos={products}/>}
        </div>
    )
};

export default ItemListContainer;