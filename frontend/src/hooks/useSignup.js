import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext()

    const signup = async (name, contact, email, password, conpassword) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, contact, email, password, conpassword })
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)

            console.log(response)
            // console.log(error)
        }

        if(response.ok) {
            // Saving user to local context
            localStorage.setItem('user', JSON.stringify(json))
            // Updating the Auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}