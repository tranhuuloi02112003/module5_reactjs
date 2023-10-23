import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as TypeService from "../service/TypeService";
import * as CategoryService from "../service/CategoryService";

export const Update = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [type, setType] = useState({});
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        findById();
        fetchAPI();
    }, [])
    const findById = async () => {
        const result = await TypeService.findById(id);
        console.log(result)
        setType(result);
    }

    const fetchAPI = async () => {
        const resultCategory = await CategoryService.findAll();
        setCategories(resultCategory);
    }

    console.log("lllll")
    console.log(categories)


    return type.name !== "" ? (
        <>
            <div className="container">
                <h1>Update Product</h1>
                <Formik enableReinitialize={true}
                        initialValues={{
                            name: type.name,
                            quantity: type.quantity,
                            date: type.date,
                            state: type.state,
                            categoryId: type.id
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required("Name not empty"),
                            // email: Yup.string().required("Email not empty")
                            //     .matches("^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\\.[a-zA-Z0-9-.]+$", "Email format is incorrect"),
                            quantity: Yup.number().typeError("Quantity must be a number").required("Phone not empty")
                        })}
                        onSubmit={(values) => {
                            const update = async () => {
                                await TypeService.update(id, values);
                            }
                            update();
                            toast("added")
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

                            <div className="form-group" style={{display: 'flex'}}>
                                <label htmlFor="exampleInputCategory" className="form-label">State: &nbsp;</label>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="Đã bán"
                                           id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Đã bán &nbsp;&nbsp;
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="Chưa bán"
                                           id="flexRadioDefault2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Chưa bán
                                    </label>
                                </div>
                            </div>


                            <div className="form-group">
                                <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                <Field name='categoryId' as="select" className="form-select form-select-sm"
                                       aria-label="Small select example"
                                >
                                    {
                                        categories.map((item) => (
                                            <option value={(item.categoryId)}>{item.name}</option>
                                        ))
                                    }
                                </Field>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </>
    ) : ""
}
