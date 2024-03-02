import { useContext } from "react";
import { ProdContext } from "../context/ProdContext";

export const useProdContext = () => {
    const context = useContext(ProdContext)

    if(!context) {
        throw Error("useProdContext must be used inside an ProdContextProvider");
    }

    return context;
}
