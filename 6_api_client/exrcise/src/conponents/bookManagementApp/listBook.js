import {useEffect, useState} from "react";
import * as BookService from "../../service/BookService";
import './listBook.css';
import {NavLink} from "react-router-dom";



export const ListBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchAPI()
    }, [])
    const fetchAPI = async () => {
        const result = await BookService.findAllBook();
        setBooks(result);
    }
    return (
        <>
            <h1>Library  <NavLink to="/create" id="add"  className="btn btn-success">Add a new Book</NavLink> </h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope='col'>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink type="button" className="btn btn-primary" to={`/update/${book.id}`}>Update</NavLink>&nbsp;
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}
