import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const [pirateList, setPirateList] = useState([])

    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirateList(res.data))
            .catch(err => console.log(err))
    }, [deleteState])

    const deleteHandler = pirate_id => {
        axios.delete("http://localhost:8000/api/pirates/" + pirate_id)
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Pirate Crew</h1>
            <Link to="/pirate/new">Add Pirate</Link>
        {
            pirateList.map((pirate, i) => {
                return(
                    <div key={i}>
                        <p>{pirate.pirate_name}</p>
                        <div>
                        <img src={pirate.image} width='150px' height='120px'></img>
                        </div>
                        <Link className="btn btn-primary" to={`/pirate/${pirate._id}`}>View Pirate</Link>
                        -
                        <button className="btn btn-danger" onClick={() => deleteHandler(pirate._id)}>Walk the Plank</button>
                    </div>
                )
            })
        }
        </div>
    )
}
export default ListComponent