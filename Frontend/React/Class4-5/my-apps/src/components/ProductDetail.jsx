import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then(res => res.json())
            .then(data => setProductDetail(data));
    }, []);

    return (
        <div>
            <ul style={{ textAlign: 'left'}}>
                <li>Id: {productDetail.id} </li>
                <li>Title: {productDetail.title}</li>
                <li>Description: {productDetail.description}</li>
                <li>Price: {productDetail.price}</li>
            </ul>
        </div>
    )
}

export default ProductDetail;