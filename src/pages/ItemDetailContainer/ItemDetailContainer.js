import './ItemDetailContainer.css';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [singleProduct, setSingleProduct] = useState ({});
  const { id } = useParams();

  const getProduct = () => {
    const dataBase = getFirestore();
    const itemsCollection = doc(dataBase, 'items', id);

    getDoc(itemsCollection)
    .then((response) => {
      console.log(response.id)
      console.log(response.data())
      setSingleProduct({id: response.id, ...response.data()});
    })
    .catch((error) => {console.log(error)})
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='itemDetailContainer'><ItemDetail product={singleProduct}/></div>
  )
}

export default ItemDetailContainer;