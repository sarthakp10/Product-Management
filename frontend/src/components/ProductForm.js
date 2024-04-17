import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProdContext } from "../hooks/useProdContext";

const ProductForm = ({ onClose }) => {
    const { dispatch } = useProdContext()
    const { user } = useAuthContext()
    const [srno, setSrno] = useState(1);
    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [img, setImg] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const handleImage = (event) => {
        const file = event.target.files[0];
        if(file && file.type === 'image/png') {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            alert("Please upload a PNG file.");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user) {
            setError('You must be logged in!');
            return;
        }
        const product = {srno, id, name, description, cost, img}

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setEmptyFields([]);
            setError(null);
            setSrno(srno + 1);
            setId(id + 1);
            setName('');
            setCost('');
            setDescription('');
            setImg('');
            onClose();
            dispatch({type: 'CREATE_PRODUCT', payload: json})
            console.log("New product added.");
        }
    }

    return ( 
        <div className="">
            <form onSubmit={handleSubmit} className="absolute animate-slide md:h-[82%] border-2 shadow-2xl border-gray-200 mt-5 z-20 bg-white rounded-3xl md:mx-96">
            <h3 className="text-center mt-4 text-2xl md:text-4xl font-semibold mb-6 pb-3 border-b-2 border-green-500">Add a new Product</h3>
            <label className="labels">Name of the Product: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className={emptyFields.includes('name') ? 'inputs h-9 w-1/2 border-2 border-red-500':'inputs h-9 w-1/2 '}/><br />

            <label className="labels">Description of the Product:</label><br />
            <textarea name="desc" id="desc" cols="60" rows="5" onChange={(e) => setDescription(e.target.value)} value={description}
            className={emptyFields.includes('description') ? 'inputs mt-2 border-2 border-red-500':'w-72 md:w-4/5 inputs ml-6 mt-2 pt-2'}></textarea><br />

            <label className="labels">Cost (in Rs.): </label>
            <input type="number" onChange={(e) => setCost(e.target.value)} value={cost} className={emptyFields.includes('cost') ? 'inputs h-9 border-2 border-red-500':'inputs h-9'}/><br />

            <label className="labels">Image (in PNG format):</label>
            <input type="file" name="" id="" onChange={handleImage} accept="image/png" className="ml-10 mt-2 md:ml-3"/><br />

            <div className="flex mb-3 md:mb-0 justify-evenly md:items-center md:mx-16">
                <button className="btn flex justify-center items-center bg-green-500 w-36 h-10 text-white font-semibold rounded-xl mt-8 px-1 scale">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Product
                </button>
                <button onClick={onClose} className="flex border-2 border-green-500 w-28 h-10 mt-8 rounded-xl items-center justify-evenly text-green-500 font-semibold scale">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Go Back
                </button>
            </div>
            {error && <div className="mt-5 ml-6 pl-4 pt-2 bg-red-100 border border-red-500 text-red-500 w-1/2 h-10">{error}</div>}
            </form>
        </div>
        
     );
}
 
export default ProductForm;