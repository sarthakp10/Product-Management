import { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { useProdContext } from "../hooks/useProdContext";

const Home = () => {
    const {products, dispatch} = useProdContext();
    useEffect(() => {
      const fetchprods = async () => {
        const response = await fetch('/api/products');
        const json = await response.json();

        if(response.ok) {
            dispatch({type: 'SET_PRODUCTS', payload: json})
        }
      }
      fetchprods();
    }, [dispatch])
    return ( 
        <div className="">
            <h1 className="text-4xl ml-8 mt-6 font-semibold">Your Products</h1>
            <div className="grid grid-cols-3 gap-y-6 mt-5 ml-2">
                {products && products.map(product => (
                    <ProductDetails product = {product} key = {product._id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;