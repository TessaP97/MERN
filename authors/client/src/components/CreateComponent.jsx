import React, {useState} from "react"
import {Link, navigate} from "@reach/router"
import axios from "axios"

const CreateComponent = props => {

    const [input, setInput] = useState("")
    const [validState, setValidState] = useState({})

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/new", {"name": input})
            .then(res => navigate("/"))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })

    }

    return(
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" onChange={e => setInput(e.target.value)} name="" id="" />
                    {(validState.name) ? <p>{validState.name}</p>: null}
                </p>
                <Link to="/">Cancel</Link>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default CreateComponent