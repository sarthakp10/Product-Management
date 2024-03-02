const ProductDetails = ({ product }) => {
    return ( 
        <div>
            <h4>{product.srno}</h4>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h2>Rs. {product.cost}</h2>
            <p>{product.createdAt}</p>
        </div>
     );
}
 
export default ProductDetails;