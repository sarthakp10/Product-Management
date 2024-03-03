import { useState } from "react";
import { useProdContext } from "../hooks/useProdContext";

const ProductForm = () => {
    const { dispatch } = useProdContext()
    const [srno, setSrno] = useState(1);
    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [img, setImg] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const [dispForm, setDispForm] = useState(true);

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
        const product = {srno, id, name, description, cost, img}

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
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
            setDispForm(false);
            dispatch({type: 'CREATE_PRODUCT', payload: json})
            console.log("New product added.");
        }
    }

    return ( 
        <div className={dispForm? '':'hidden'}>
            <form onSubmit={handleSubmit} className="absolute animate-slide h-[82%] border-2 shadow-2xl border-gray-200 mt-5 z-20 bg-white rounded-3xl mx-96">
            <h3 className="text-center mt-4 text-4xl font-semibold mb-6 pb-3 border-b-2 border-green-500">Add a new Product</h3>
            <label className="labels">Name of the Product: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className={emptyFields.includes('name') ? 'inputs h-9 w-1/2 border-2 border-red-500':'inputs h-9 w-1/2 '}/><br />

            <label className="labels">Description of the Product:</label><br />
            <textarea name="desc" id="desc" cols="60" rows="5" onChange={(e) => setDescription(e.target.value)} value={description}
            className={emptyFields.includes('description') ? 'inputs mt-2 border-2 border-red-500':'inputs ml-6 mt-2 pt-2'}></textarea><br />

            <label className="labels">Cost (in Rs.): </label>
            <input type="number" onChange={(e) => setCost(e.target.value)} value={cost} className={emptyFields.includes('cost') ? 'inputs h-9 border-2 border-red-500':'inputs h-9'}/><br />

            <label className="labels">Image (in PNG format):</label>
            <input type="file" name="" id="" onChange={handleImage} accept="image/png" className="ml-3"/><br />

            <button className="btn flex justify-center items-center mx-auto bg-green-500 w-36 h-10 text-white font-semibold rounded-xl mt-8 px-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Product
            </button>
            {error && <div className="mt-5 ml-6 pl-4 pt-2 bg-red-100 border border-red-500 text-red-500 w-1/2 h-10">{error}</div>}

            </form>
        </div>
        
     );
}
 
export default ProductForm;