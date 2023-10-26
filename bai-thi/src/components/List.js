import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import * as CategoryService from "../service/CategoryService";
import * as TypeService from "../service/TypeService";

export const List = () => {
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    //??API=========================
    useEffect(() => {
        fetchAPI();
    }, [])//isShowModalDelete

    const fetchAPI = async () => {
        // eslint-disable-next-line no-use-before-define
        const result = await TypeService.findAll();
        setTypes(result);
        const resultCategory = await  CategoryService.findAll();
        setCategories(resultCategory);
    }
    //??API=========================

    return(
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <span><b>List product:</b></span>
                    <NavLink to="/create" className="btn btn-success">Add</NavLink>
                </div>

                {/*<input type="text" className="form-control" placeholder="Search " value={search}*/}
                {/*       onChange={(e) => setSearch(e.target.value)}/>*/}
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">State</th>
                        <th scope="col">Category</th>
                        <th scope='col'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        types.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                                <td>{item.state}</td>
                                <td>
                                    {
                                        categories.find(category => String(category.id) === String(item.categoryId))?.name
                                    }
                                </td>
                                <td>
                                    {/*<NavLink type="button" className="btn btn-primary mx-3"*/}
                                    {/*         to={`/update/${item.id}`}>Update</NavLink>*/}
                                    {/*<button type="button" className="btn btn-danger"*/}
                                    {/*        onClick={() => {*/}
                                    {/*            setIdDelete(item.id)*/}
                                    {/*            setIsShowModalDelete(true)*/}
                                    {/*        }}>Delete*/}
                                    {/*</button>*/}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                {/*<ToastContainer/>*/}
            </div>

        </>
    )
}

//Sắp xếp
// const sortName = () => {
//     // eslint-disable-next-line no-use-before-define
//     currentItems = [...currentItems].sort((a, b) => a.name.localeCompare(b.name));
// }

//Sắp xếp
