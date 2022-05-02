import React, { useState } from 'react';
import { navigate } from '@reach/router';



const Searchbar = props => {
    const [formState, setFormState] = useState({
        category: "people",
        id: ""
    });


    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }


    const onSubmit = e => {
        e.preventDefault();
        navigate('/' + formState.category + '/' + formState.id);
    }



    return (
        <div>
            <form onSubmit = {onSubmit}>
                <select name="category" onChange={onChange}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            <div>
                <p>Id:</p>
                <input type="number" name="id" onChange={onChange}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default Searchbar;