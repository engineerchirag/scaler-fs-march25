import { useState } from "react";
import ProductList from "./ProductList"

const Cart = () => {
    const [cartValue, setCartValue] = useState(0);

    const updateCart = (price) => {
        setCartValue(cartValue + price);
    }
    
    return (
        <div>
            <h2>Cart</h2>
            <div>Total Cart Value: {cartValue}</div>
            <ProductList updateCart={updateCart} />
        </div>
    )
}

export default Cart;