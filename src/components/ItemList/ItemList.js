import Item from "../Item/Item";
import './ItemList.css'
import { Link } from "react-router-dom";

const ItemList = ({productos}) => {
  return (
    <div className="itemList">
        {productos.map((product) => (
          <Link to={`/item/${product.id}`} className="link" key={product.id}>
            <Item  producto={product}/> 
          </Link>
        ))}
    </div>
    );
};

export default ItemList