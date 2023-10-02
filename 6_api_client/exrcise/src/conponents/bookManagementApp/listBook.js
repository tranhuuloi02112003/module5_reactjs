import React, {useEffect, useState} from "react";
import * as BookService from "../../service/BookService";

import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const ListBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchAPI()
    }, [books])
    const fetchAPI = async () => {
        const result = await BookService.findAllBook();
        setBooks(result);
    }
    const handleDelete =async (id) => {
        await BookService.deleteBook(id);
       toast("Removed")
    }
    return (
        <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <h1>Library  <NavLink to="/create" style={{float: "right"}}  className="btn btn-success">Add a new Book</NavLink> </h1>
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
                                <button type="button" className="btn btn-danger"  onClick={() => handleDelete(book.id)}>Delete</button>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ToastContainer />
        </>
    );
}
