import { useContext } from "react";
import { CartContext } from "../Context/carts";
import { Cart } from "../Components/Carts";

export const useCart = () => {
    const context = useContext(CartContext)

    if(context === undefined){
        throw new Error("No se permite usar el carrito.")
    }
    return context
}