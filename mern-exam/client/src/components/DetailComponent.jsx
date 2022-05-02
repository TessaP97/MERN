import axios from "axios"
import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"

const DetailComponent = props => {
    const {pirate_id} = props

    const [pirate, setPirate] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${pirate_id}`)
            .then(res => setPirate(res.data))
            .catch(err => setPirate(err))
    }, [])

    return (
        <div>
            <h1>Deep Sea Davy</h1>
            <div>
                <img src={pirate.image} width='150px' height='120px'></img>
                <h1>"{pirate.catch_phrase}"</h1>
            </div>
            <div>
                <h3>About</h3>
                <p>Position: {pirate.crew_position}</p>
                <p>Treasures: {pirate.num_of_treasure}</p>
            </div>
            <Link to="/pirates">Pirate Crew</Link>
        </div>
    )
}
export default DetailComponent