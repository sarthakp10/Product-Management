import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";

const Home = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
      const fetchprods = async () => {
        const response = await fetch('/api/products');
        const json = await response.json();

        if(response.ok) {
            setProducts(json);
        }
      }
      fetchprods();
    }, [])
    return ( 
        <div className="home">
            <div>
                {products && products.map(product => (
                    <ProductDetails product = {product} key = {product._id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;