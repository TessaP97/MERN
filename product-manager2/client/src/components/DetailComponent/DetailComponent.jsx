import axios from "axios"
import React, {useEffect, useState} from "react"

const DetailComponent = props => {

    const {product_id} = props

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => setProduct(res.data))
            .catch(err => setProduct(err))
    }, [])

    return (
        <div>
            <h1>Details:</h1>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h3>{product.description}</h3>
            <p>ID: {product._id}</p>
        </div>
    )
}
export default DetailComponent