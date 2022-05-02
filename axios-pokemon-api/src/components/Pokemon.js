import axios from "axios"
import React,  { useState } from "react";

const Pokemon = () => {

    const [pokeState, setPokeState] = useState([]);

    const onClick = () => {
        axios.get ("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")

        .then (response => {
            setPokeState (response.data.results)
        })
        .catch (err => console.log(err))
    };

    return(
        <div>
            <button onClick={onClick}>Fetch Pokemon!</button>
            {pokeState.map((poke, i) =>
                <li key={i}> { poke.name } </li> 
                
            )}
        </div>

    )
}
export default Pokemon;