import * as ProductService from "../service/ProductService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as CategoryService from "../service/CategoryService";

export const ProductCreate = () => {
    const navigate = useNavigate();
    const [categoris, setCategoris] = useState([]);
    useEffect(()=>{
        findAllCategory();
    },[]);

    const findAllCategory = async () => {
      const res=await CategoryService.findAllCategory();
      setCategoris(res);
    }
    return (
        <>
            <div className="container">
                <h1>Create Product</h1>
                <Formik
                    initialValues={{
                        name: '',
                        quantity: '',
                        date: '',
                        categoryId: 1,
                        state:""
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name not empty").matches("^KH\\d{2}$","Tên phải có dịnh dạng KHxx"),
                        // email: Yup.string().required("Email not empty")
                        //     .matches("^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\\.[a-zA-Z0-9-.]+$", "Email format is incorrect"),
                        quantity: Yup.number().typeError("Quantity must be a number").required("Quantity not empty")
                    })}
                    onSubmit={(values) => {
                        const create = async () => {
                            await ProductService.saveProduct(values);
                        }
                        create();
                        toast("Thêm mới thanh công")
                        navigate("/");
                    }}>
                    <div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name='name' type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                                <ErrorMessage name="name" component="span" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <Field name='quantity' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity"/>
                                <ErrorMessage name="quantity" component="span" className="text-danger"/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <Field name='date' type="date" className="form-control" id="date"
                                       placeholder="Date"/>
                            </div>
                            <div className="form-group" style={{ display: 'flex'}}    >
                                <label htmlFor="exampleInputCategory" className="form-label">State: &nbsp;</label>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="Đã bán"
                                           id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Đã bán&nbsp;&nbsp;
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="Chưa bán"
                                           id="flexRadioDefault2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                        Chưa bán
                                    </label>
                                </div>
                            </div>


                            <div className="form-group" >
                                <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                <Field name='categoryId' as="select" className="form-select form-select-sm" aria-label="Small select example"
                                >
                                    {
                                        categoris.map((item)=>(
                                            <option value={(item.categoryId)}>{item.name}</option>
                                        ))
                                    }
                                </Field >
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </>
    )
}
