import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // Removing user from local storage
        localStorage.removeItem('user')

        // Updating the auth context back to null.
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}