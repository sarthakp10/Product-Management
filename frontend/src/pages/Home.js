import { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { useProdContext } from "../hooks/useProdContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const {products, dispatch} = useProdContext();
    const { user } = useAuthContext()
    useEffect(() => {
      const fetchprods = async () => {
        const response = await fetch('/api/products', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if(response.ok) {
            dispatch({type: 'SET_PRODUCTS', payload: json})
        }
      }
      if(user) {
        fetchprods()
      }
    }, [dispatch, user])
    return ( 
        <div className="">
            <h1 className="text-2xl md:text-4xl ml-8 mt-6 font-semibold">Your Products</h1>
            <div className="md:grid grid-cols-3 gap-y-8 mt-5 ml-2">
                {products && products.map(product => (
                    <ProductDetails product = {product} key = {product._id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;