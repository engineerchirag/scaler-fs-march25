import { useState } from "react";

const ProductList = () => {
    const Products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Headphones", price: 150 },
        { id: 3, name: "Smartphone", price: 800 },
        { id: 4, name: "Smartwatch", price: 250 },
        { id: 5, name: "Tablet", price: 900 },
        { id: 6, name: "Keyboard", price: 50 },
        { id: 7, name: "Mouse", price: 30 },
        { id: 8, name: "Monitor", price: 400 },
        { id: 9, name: "Printer", price: 200 },
        { id: 10, name: "Projector", price: 600 },
    ];

    const [cartValue, setCartValue] = useState(0);

    const updateCart = (price) => {
        setCartValue(cartValue + price);
    }
    
    return (
        <div>
            <h2>Product List</h2>
            <div>Total Cart Value: {cartValue}</div>
            <ul className="product-list">
                {
                    Products.map(product => {
                        return (
                            <li><span>{product.name} (Rs.{product.price})</span> <button onClick={() => updateCart(product.price)}>Add to Cart</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;