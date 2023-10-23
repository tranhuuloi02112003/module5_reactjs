import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";
import {ModelDelete} from "./ModelDelete";
import * as CategoryService from "../service/CategoryService";
import * as TypeService from "../service/TypeService";

export const List = () => {
    const [idDelete, setIdDelete] = useState(0);
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("");

    // Phân trang------------------------------
    const [activePage, setActivePage] = useState(1);
    const itemsCountPerPage = 5; // Số lượng kết quả tối đa trên mỗi trang

    const indexOfLastItem = activePage * itemsCountPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (pageNumber) => {
        console.log(pageNumber);
        setActivePage(pageNumber);
    };
    //?? Phân trang------------------------------

    // Modal******************
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const handleClose = () => {
        setIsShowModalDelete(false);
    }
    //??Modal******************

    //??API=========================
    useEffect(() => {
        fetchAPI();
    }, [isShowModalDelete])//isShowModalDelete

    const fetchAPI = async () => {
        // eslint-disable-next-line no-use-before-define
        const result = await TypeService.findAll();
        setTypes(result);
        const resultCategory = await  CategoryService.findAll();
        setCategories(resultCategory);


    }
    //??API=========================

    //Search!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(() => {
        if (types !== undefined) {
            const results = types.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) || item.quantity.includes(search));
            setSearchResults(results);
        }
    }, [search, types]);
    //??Search!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return (
        <>
           <div className="container">
               <div className="d-flex justify-content-between">
                   <span><b>List product:</b></span>
                   <NavLink to="/create" className="btn btn-success">Add</NavLink>
               </div>

               <input type="text" className="form-control" placeholder="Search " value={search}
                      onChange={(e) => setSearch(e.target.value)}/>
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
                       currentItems.map((item) => (
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
                                   <NavLink type="button" className="btn btn-primary mx-3"
                                            to={`/update/${item.id}`}>Update</NavLink>
                                   <button type="button" className="btn btn-danger"
                                           onClick={() => {
                                               setIdDelete(item.id)
                                               setIsShowModalDelete(true)
                                           }}>Delete
                                   </button>
                               </td>
                           </tr>
                       ))
                   }
                   </tbody>
               </table>
               <Pagination
                   activePage={activePage}
                   itemsCountPerPage={itemsCountPerPage}
                   totalItemsCount={searchResults.length}
                   pageRangeDisplayed={5}
                   onChange={handlePageChange}
                   itemClass="page-item"
                   linkClass="page-link"
               />
               {/*<ToastContainer/>*/}
           </div>
            <ModelDelete
                show={isShowModalDelete}
                handleClose={handleClose}
                id={idDelete}
            />
        </>
    )
}

