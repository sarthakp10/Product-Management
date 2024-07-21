import { useState } from 'react';
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {
    const [form, setForm] = useState(false);
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        setForm(true);
    }

    const handleClick2 = () => {
        logout()
    }
    const closeForm = () => setForm(false);
    return ( 
        <header className=''>
            <div className='flex justify-evenly bg-green-500 md:justify-between h-16 w-full'>
                <Link to='/' className='text-white font-bold ml-6 md:ml-12 mt-3 text-xl md:text-3xl'>ProductMan.net</Link>
                {user && 
                (<div className='flex justify-evenly w-80'>
                    <div className='w-full'>
                        <button onClick={handleClick} className='flex justify-evenly py-2 pr-2 pl-1 mr-3 md:mr-5 mt-3 md:w-40 text-white text-center rounded-2xl font-semibold bg-red-600 hover:bg-violet-600 scale'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            New Product
                        </button>
                    </div>
                    <div className='flex items-center justify-center mr-10 w-40'>
                        <button onClick={handleClick2} className='border-2 border-green-600 w-[85%] h-10 rounded-2xl text-md font-semibold text-green-500 bg-gray-100 scale'>Logout</button>
                    </div>
                    {/* <span>{user.email}</span> */}
                </div>)}
                {!user && (
                    <div className='w-1/2 md:w-1/4 flex justify-evenly'>
                        <Link to={'/api/user/login'} className='links'>Login</Link>
                        <Link to={'/api/user/signup'} className='links'>Sign Up</Link>
                    </div>
                )}
            </div>
            {form && <ProductForm onClose={closeForm}/>}
        </header>
     );
}
 
export default Navbar;