import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';



const People = ({id}) => {
    const [people, setPeople] = useState([]);
    const [home, SetHome] = useState({ name: "loading..."});

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people/' + id)
            .then(res => { setPeople(res.data) })
            .catch(() => navigate('/error'));
    }, [id]);

    useEffect(() => {
        axios
            .get(people.homeworld)
            .then(res => {
                SetHome(res.data);
            })
            .catch(console.log);
    }, [id,people]);

    const getHomeWorldId = () => {
        if (home.url) {
            const url = home.url;
            let path = url.length-2;
            let HwId = "";

            while (url[path] !== "/") {
            HwId = url[path] + HwId;
                path--;
            }
            return HwId;
        }
    }


    return (
        <div>
            <div>
                <h1>{people.name}</h1>
                <p>Height: </p>
                <p>{people.height}</p>
            </div>
            <div>
                <p>Weight: </p>
                <p>{people.mass}</p>
            </div>
            <div>
                <p>Hair Color: </p>
                <p>{people.hair_color}</p>
            </div>
            <div>
                <p>Skin Color: </p>
                <p>{people.skin_color}</p>
            </div>
            <div>
                <p>Eye Color: </p>
                <p>{people.eye_color}</p>
            </div>
            <div>
                <p>Birth Year: </p>
                <p>{people.birth_year}</p>
            </div>
        </div>
    )
}


export default People;