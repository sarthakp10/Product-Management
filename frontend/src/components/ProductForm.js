import { useState } from "react";
import { useProdContext } from "../hooks/useProdContext";

const ProductForm = () => {
    const { dispatch } = useProdContext()
    const [srno, setSrno] = useState(4);
    const [id, setId] = useState(4);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [img, setImg] = useState('');

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
            setError(json.error)
        }
        if(response.ok) {
            setError(null);
            setSrno(srno + 1);
            setId(id + 1);
            setName('');
            setCost('');
            setDescription('');
            setImg('');
            dispatch({type: 'CREATE_PRODUCT', payload: json})
            console.log("New product added.");
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Add a new Product</h3>

            <label>Name of the Product: </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br />

            <label>Description of the Product:</label>
            <textarea name="desc" id="desc" cols="30" rows="5" onChange={(e) => setDescription(e.target.value)} value={description}></textarea><br />

            <label>Cost (in Rs.): </label>
            <input type="number" onChange={(e) => setCost(e.target.value)} value={cost}/><br />

            <label>Image (in PNG format):</label>
            <input type="file" name="" id="" onChange={handleImage} accept="image/png"/><br />

            <button>Add Product</button>
            {error && <div>{error}</div>}

        </form>
     );
}
 
export default ProductForm;