import React, {useState, useEffect} from "react"
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const {submitState} = props

    const [listState, setListState] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => setListState(res.data.allProducts))
            .catch(err => console.log(err))
    }, [submitState])

    return(
        <div>
            <h1>List Component</h1>
            {
                listState.map((product, i) => {
                    return (
                        <div key={i}>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            {/*<p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                            <p>ID: {product._id}</p>
                            <p>Created At: {product.createdAt}</p>
                    <p>Updated At: {product.updatedAt}</p>*/}
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ListComponent