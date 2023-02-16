import "./ItemList.css"
import Item from "../Item/Item";
// import { products } from "../../data/products";
import { Link } from "react-router-dom";

const ItemList = ({ productList}) => {
  console.log(productList)
return (
  <div className="itemList">
      {productList.map((product) =>(
          <div key={product.id}> 
          <Link to={`/item/${product.id}`}>
          <Item product={product}/>
          </Link>            
          </div>
      ))}
  </div>
)
}

export default ItemList
