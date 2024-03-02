import { createContext, useReducer } from "react";

export const ProdContext = createContext();

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            }
        default:
            return state;
    }
}

export const ProdContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        products: null,
    })

    return (
        <ProdContext.Provider value = {{...state, dispatch}}>
            {children}
        </ProdContext.Provider>
    )
}