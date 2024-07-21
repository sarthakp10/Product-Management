import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin() 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    } 
    return ( 
        <div className=''>
            <form className='flex flex-col md:w-1/3 bg-white m-auto mt-20 shadow-2xl rounded-2xl' onSubmit={handleSubmit}>
                <h3 className='text-3xl md:text-4xl font-semibold mx-auto mt-5 border-b-2 w-1/2 text-center pb-2 border-green-500 mb-8'>Login</h3>

                <label className='labels mb-1'>Email</label>
                <input type="email" className='inputs h-9 w-[70%]' onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                <label className='labels mb-1'>Password</label>
                <input type="password" className='inputs h-9 w-[70%]' onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                {/* <a href="/" className='text-green-500 flex justify-end mr-36 hover:underline hover:opacity-70'>Forgot Password?</a> */}
                {error && <div className='error w-3/4 pl-2 h-10 pt-2'>{error}</div>}
                <button disabled={isLoading} className='scale btn border w-32 mx-auto h-10 my-3 bg-green-500 rounded-xl text-white font-semibold'>Login</button>
                <div className='md:flex w-4/5 md:justify-center md:text-lg mb-4 text-center m-auto'>
                    <p className='md:mr-2'>Don't have an account?</p>
                    <Link to={'/api/user/signup'} className='text-green-500 font-semibold hover:underline hover:opacity-70'>Sign Up</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Login;