import {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import * as CategoryService from "../service/CategoryService";
import * as TypeService from "../service/TypeService";
import {NavLink} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export const List = () => {

    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [inputSeachName, setInputSeachName] = useState("");
    const [inputSeachCategory, setInputSeachCategory] = useState("");
    let display = true;


    // const [searchCategory, setSearchCategory] = useState("");

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        // eslint-disable-next-line no-use-before-define
        const result = await TypeService.findAll();
        setTypes(result)
        const resultCategory = await CategoryService.findAll();
        setCategories(resultCategory);
    }


    useEffect(() => {
        let filtered = types;
        if (inputSeachCategory !== "") {
            filtered = filtered.filter((product) => product.categoryId.toString() === inputSeachCategory)
        }
        if (inputSeachName !== "") {
            filtered = filtered.filter((product) => product.name.toLowerCase().includes(inputSeachName.toLowerCase()))
        }
        setSearchResults(filtered)

    }, [inputSeachName, inputSeachCategory, types]);

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <span><b>List product:</b></span>
                    <NavLink to="/create" className="btn btn-success">Add</NavLink>
                </div>

               <div className="d-flex justify-content-between">
                   <input type="text" className="form-control" placeholder="Tim theo tên sp " value={inputSeachName}
                          onChange={(e) => setInputSeachName(e.target.value)}/>
                   <select
                       id="categories"
                       className="form-select form-select-sm"
                       aria-label="Small select example"
                       value={inputSeachCategory}
                       onChange={(e) => setInputSeachCategory(e.target.value)}
                   >
                       <option value="">Chọn loại muốn tìm kiếm</option>
                       {categories.map((category) =>(
                           <option key={category.id} value={category.id.toString()}>{category.name}</option>
                       ))}
                   </select>

               </div>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Thể loại</th>
                        <th scope="col">Số luượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Ngày nhập</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        searchResults.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.MaSP}</td>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        categories.find(category => String(category.id) === String(item.categoryId))?.name
                                    }
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </>
    )
}


