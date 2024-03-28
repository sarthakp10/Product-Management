import { useState } from 'react';
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm';
const Navbar = () => {
    const [form, setForm] = useState(false);
    const handleClick = () => {
        setForm(true);
    }
    const closeForm = () => setForm(false);
    return ( 
        <header className=''>
            <div className='flex justify-between bg-green-500 md:justify-between h-16 w-full'>
                <Link to='/' className='text-white font-bold ml-6 md:ml-12 mt-3 text-xl md:text-3xl'>ProductMan.net</Link>
                <button onClick={handleClick} className='flex p-2 h-10 mr-3 md:mr-20 mt-3 md:w-40 text-white text-center rounded-2xl font-semibold bg-red-600 hover:bg-violet-600 scale'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-6 md:mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New Product
                </button>
            </div>
            {form && <ProductForm onClose={closeForm}/>}
        </header>
     );
}
 
export default Navbar;