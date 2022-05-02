import React, { useEffect, useState } from "react"
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const [authorList, setAuthorList] = useState([])

    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthorList(res.data))
            .catch(err => console.log(err))
    }, [deleteState])

    const deleteHandler = author_id => {
        axios.delete("http://localhost:8000/api/authors/" + author_id)
        .then(res => setDeleteState(!deleteState))
        .catch(err => console.log(err))
    }


    return(
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authorList.map((author, i) => {
                        return(
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/edit/${author._id}`}>Edit</Link>
                                    -
                                    <button className="btn btn-danger" onClick={() => deleteHandler(author._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )

}
export default ListComponent