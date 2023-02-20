import "./Item.css"

const Item = ({product}) => {
  return (
    <div className="item">
      <img alt={product.name} src={product.image} />
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>      
    </div>
  )
}

export default Item