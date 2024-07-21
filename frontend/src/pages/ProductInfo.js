import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProductInfo = () => {
    // const { products, dispatch } = useProdContext();
    const { id } = useParams()
    const { user } = useAuthContext()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchsingleprod = async () => {
          try {
            const response = await fetch(`/api/products/${id}`, {
              headers: {
                'Authorization':`Bearer ${user.token}`
              }
            });
            const data = await response.json();
            console.log(data);
            setProduct(data)
          }
          catch(error) {
            console.error('Error fetching product details:', error);
          }
        }
        fetchsingleprod();
      }, [id])
      

    return ( 
      <div>
        <h1 className="text-center mt-6 text-5xl font-bold border-b-4 w-[40%] border-green-500 m-auto pb-2">Product Details</h1>
        <div className="flex w-[80%] border-2 border-green-500 justify-between h-1/2 mx-auto mt-8 bg-white rounded-2xl">
          <img src={product.img} alt={product.name} className="w-1/2 rounded-2xl"/>
          <div className=" w-1/2 shadow-xl p-10">
            <h1 className="text-5xl font-semibold mb-3">{product.name}</h1>
            <p className="text-2xl text-gray-500 mb-5">Uploaded {product.createdAt}</p>
            <h3 className="mt-9 text-2xl">Cost: <span className="text-gray-500">Rs.</span> <strong className="font-bold text-5xl">{product.cost}</strong></h3>

          </div>
        </div>

        <div className="bg-white w-3/4 mt-8 mx-auto rounded-2xl p-5 border-2 border-green-500">
          <h1 className="text-3xl font-bold border-b-2 border-green-500 w-[40%] pb-1 mb-5">Description of the Product:</h1>
          <p className="text-xl">{product.description}</p>
        </div>
        <Link to='/' className="scale flex btn bg-green-500 w-40 mx-auto mt-8 h-10 items-center justify-center rounded-2xl border-2  text-white font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>
        
        
     );
}
 
export default ProductInfo;