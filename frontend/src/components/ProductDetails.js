import { Link } from 'react-router-dom'
import { useProdContext } from "../hooks/useProdContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { useEffect } from 'react';
// import ProductInfo from "../pages/ProductInfo";

const ProductDetails = ({ product }) => {
    const { dispatch } = useProdContext();
    const { user } = useProdContext()
    const handleClick = async () => {
        if(!user) {
            return;
        }
        const response = await fetch('/api/products/' + product._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok) {
            dispatch({type:'DELETE_PRODUCT', payload: json})
        }
    }

    return ( 
        <div>
            <div className="w-[90%] h-full m-auto rounded-2xl bg-white shadow-xl scale pb-4">
            <div className='mt-5'>
                <h4 className="absolute ml-3 mt-3 text-center bg-green-500 w-8 h-8 py-1 text-gray-100 rounded-full font-bold">{product.srno}</h4>
                <img src={product.img} alt="" className="w-full object-cover rounded-2xl max-h-80 h-full"/>
                <div className="md:flex justify-between mx-8 mt-5">
                    <h3 className="text-xl md:text-2xl font-bold">{product.name}</h3>
                    <h2 className="text-3xl font-bold"><span className="text-gray-400 text-xl font-bold">Rs.</span> {product.cost}</h2>                    
                </div>
                <p className="text-left ml-8 text-gray-500">Uploaded {formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}</p>
                <p className="text-left mx-8 md:text-lg text-gray-700">{product.description}</p>
                <div className="flex justify-center">
                    <Link to={`/api/products/${product._id}`} className="mt-4 mb-2 mr-5 w-32 h-10 text-center pt-2 rounded-2xl bg-green-500 text-white font-semibold btn scale">View Details</Link>
                    <button onClick={handleClick} className="scale mt-4 mb-2 w-20 h-10 rounded-2xl bg-red-500 text-white font-semibold hover:border-2 hover:border-red-500 hover:bg-white hover:text-red-500">Delete</button>
                </div>
            </div>
            
        </div>
        </div>
        
        
     );
}
 
export default ProductDetails;