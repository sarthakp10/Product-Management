import { useAuthContext } from "./useAuthContext"
import { useProdContext } from "./useProdContext"


export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchProds } = useProdContext()

    const logout = () => {
        // Removing user from local storage
        localStorage.removeItem('user')

        // Updating the auth context back to null.
        dispatch({ type: 'LOGOUT' })
        dispatchProds({ type: 'SET_PRODUCTS', payload: null })
    }

    return { logout }
}