import { useState } from 'react'
import { useSignup } from '../hooks/useSignup';

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
            <form className='' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>Name</label>
                <input type="text" onChange = {(e) => setName(e.target.value)} value = {name}/>
                <label>Contact No.</label>
                <input type="text" onChange = {(e) => setContact(e.target.value)} value = {contact}/>
                <label>Email</label>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                <label>Password</label>
                <input type="password" onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                <label>Confirm Password</label>
                <input type="password" onChange = {(e) => setConpassword(e.target.value)} value = {conpassword}/>

                <button disabled={isLoading}>Sign Up</button>
                {error && <div className=''>{error}</div>}
            </form>
            
        </div>
     );
}
 
export default Signup;