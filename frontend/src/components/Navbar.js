import { useState } from 'react';
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm';
const Navbar = () => {
    const [form, setForm] = useState(false);
    const handleClick = () => {
        setForm(true);
    }
    return ( 
        <header>
            <div className='flex bg-green-500 justify-between h-16'>
                <Link className='text-white font-bold ml-12 mt-3 text-3xl'>ProductMan.net</Link>
                <button onClick={handleClick} className='flex p-2 h-10 mr-20 mt-3 w-40 text-white text-center rounded-2xl font-semibold bg-red-600 hover:bg-violet-600 duration-200 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New Product
                </button> 
            </div>
            {form && <ProductForm />}
        </header>
     );
}
 
export default Navbar;