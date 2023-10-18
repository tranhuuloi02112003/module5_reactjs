import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";
import './productList.css';
import {ModelDelete} from "./ModelDelete";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
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

    //Modal******************
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const handleClose = () => {
        setIsShowModalDelete(false);
    }
    //??Modal******************

    //API=========================
    useEffect(() => {
        fetchAPI();
    }, [isShowModalDelete])

    const fetchAPI = async () => {
        // eslint-disable-next-line no-use-before-define
        const result = await ProductService.findAllProduct();
        setProducts(result);
    }
    //??API=========================

    //Search!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(() => {
        if (products !== undefined) {
            const results = products.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) || item.quantity.includes(search));
            setSearchResults(results);
        }
    }, [search, products]);
    //??Search!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    return (
        <>

            <div className="d-flex justify-content-between">
                <span><b>List product:</b></span>
                <NavLink to="/create" className="btn btn-success">Add new product</NavLink>
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
                            <td>
                                <NavLink type="button" className="btn btn-primary mx-3"
                                         to={`/update/${item.id}`}>Update</NavLink>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => setIsShowModalDelete(true)}>Delete
                                </button>
                                <ModelDelete
                                    show={isShowModalDelete}
                                    handleClose={handleClose}
                                    id={item.id}
                                />
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
            <ToastContainer/>

        </>
    )
}

