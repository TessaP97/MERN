import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Planets = ({id}) => {
    const [planets, setPlanets] = useState([]);
    const [home, SetHome] = useState({ name: "loading..."});
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {setPlanets(res.data)})
            .catch(() => navigate('/error'));
    }, [id]);

    useEffect(() => {
        axios
            .get(planets.homeworld)
            .then(res => {
                SetHome(res.data);
            })
            .catch(console.log);
    }, [id,planets]);

    return (
        <div>
            <div>
                <h1>{planets.name}</h1>
            </div>
            <div>
                <p>Terrain:</p>
                <p>{planets.terrain}</p>
            </div>
            <div>
                <p>Climate:</p>
                <p>{planets.climate}</p>
            </div>
            <div>
                <p>Population:</p>
                <p>{planets.population}</p>
            </div>
            <div>
                <p>Gravity:</p>
                <p>{planets.gravity}</p>
            </div>
            <div>
                <p>Diameter:</p>
                <p>{planets.diameter} </p>
            </div>
            <div>
                <p>Rotation Period:</p>
                <p>{planets.rotation_period}</p>
            </div>
            <div>
                <p>Orbital Period:</p>
                <p>{planets.orbital_period}</p>
            </div>
        </div>
    )
}


export default Planets;