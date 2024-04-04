import { useState } from 'react'
import { useSignup } from '../hooks/useSignup';
import { Link } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name, contact, email, password, conpassword)
        console.log(email, password)
    } 
    return ( 
        <div className=''>
            <form className='flex flex-col w-1/3 m-auto mt-12 shadow-2xl bg-white rounded-2xl' onSubmit={handleSubmit}>
                <h3 className='text-4xl font-semibold mx-auto mt-5 border-b-2 w-1/2 text-center pb-2 border-green-500 mb-8'>Sign Up</h3>

                <label className='labels'>Name</label>
                <input type="text" className='inputs h-9 w-[65%]' onChange = {(e) => setName(e.target.value)} value = {name}/>
                <label className='labels'>Contact No.</label>
                <input type="tel" className='inputs h-9 w-[65%]' onChange = {(e) => setContact(e.target.value)} value = {contact}/>
                <label className='labels'>Email</label>
                <input type="email" className='inputs h-9 w-[65%]' onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                <label className='labels'>Password</label>
                <input type="password" className='inputs h-9 w-[65%]' onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                <label className='labels'>Confirm Password</label>
                <input type="password" className='inputs h-9 w-[65%]' onChange = {(e) => setConpassword(e.target.value)} value = {conpassword}/>
                {error && <div className='error w-3/4 pl-2 h-10 pt-2 ml-5'>{error}</div>}
                <button disabled={isLoading} className='scale btn w-32 mx-auto h-10 my-3 bg-green-500 rounded-xl text-white font-semibold'>Sign Up</button>
                <div className='flex w-4/5 justify-center text-lg mb-4'>
                    <p className='mr-2'>Already have an account?</p>
                    <Link to={'/api/user/login'} className='text-green-500 font-semibold hover:underline hover:opacity-70'>Login</Link>
                </div>
                
            </form>
            
        </div>
     );
}
 
export default Signup;