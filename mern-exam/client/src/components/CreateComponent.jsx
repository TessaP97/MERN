import React, {useState} from "react"
import {Link, navigate} from "@reach/router"
import axios from "axios"

const CreateComponent = props => {
    const {submitState, setSubmitState} = props
    
        const [formState, setFormState] = useState({
        pirate_name: "",
        image: "",
        num_of_treasure:"",
        catch_phrase: "",
        crew_position: "First Mate"
    })

    const [validState, setValidState] = useState({})

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirate/new", formState)
            .then(res => navigate("/pirates"))
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
            <Link to="/pirates">Crew Board</Link>
            <h1>Add Pirate</h1>
            <form onSubmit={submitHandler}>
                <p>Pirate Name
                <input type="text" onChange={changeHandler} name="pirate_name" id="" />
                {(validState.pirate_name) ? <p>{validState.pirate_name}</p>: null}
                </p>
                <p>Image URL
                <input type="text" onChange={changeHandler} name="image" id="" />
                {(validState.image) ? <p>{validState.image}</p>: null}
                </p>
                <p># of Treasure Chests
                <input type="number" onChange={changeHandler} name="num_of_treasure" id="" />
                {(validState.num_of_treasure) ? <p>{validState.num_of_treasure}</p>: null}
                </p>
                <p>Pirate Catch Phrase
                <input type="text" onChange={changeHandler} name="catch_phrase" id="" />
                {(validState.catch_phrase) ? <p>{validState.catch_phrase}</p>: null}
                </p>
                <label for="crew_position">Crew Position: </label>
                <select onChange={changeHandler} name="crew_position">
                    <option value="First Mate">First Mate</option>
                    <option value="Captain">Captain</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
                {(validState.crew_position) ? <p>{validState.crew_position}</p>: null}
                <br/>
                <button type="submit">Add Pirate</button>
            </form>
        </div>
    )
}
export default CreateComponent