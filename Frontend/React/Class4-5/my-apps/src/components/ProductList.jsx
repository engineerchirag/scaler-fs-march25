import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductList = ({ updateCart }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
   }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul className="product-list">
                {
                    products.map(product => {
                        return (
                            <li>
                                <span><Link to={`/product-detail/${product.id}`}>{product.title}</Link> (Rs.{product.price})</span> 
                                <button onClick={() => updateCart(product.price)}>
                                    Add to Cart
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;