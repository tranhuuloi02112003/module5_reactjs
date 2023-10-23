import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as ProductService from "../service/ProductService";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const ProductUpdate = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        quantity: '',
        date: ''
    });
    useEffect(() => {
        findById();
    },[])
    const findById = async () => {
        const result = await ProductService.findByIdProduct(id);
        console.log(result)
        setProduct(result);
    }


    return product.name !== "" ? (
        <>
            <div className="container">
                <h1>Update Product</h1>
                <Formik enableReinitialize={true}
                    initialValues={{
                        name: product.name,
                        quantity: product.quantity,
                        date: product.date
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name not empty"),
                        // email: Yup.string().required("Email not empty")
                        //     .matches("^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\\.[a-zA-Z0-9-.]+$", "Email format is incorrect"),
                        quantity: Yup.number().typeError("Quantity must be a number").required("Phone not empty")
                    })}
                    onSubmit={(values) => {
                        const update = async () => {
                            await ProductService.updateProduct(id, values);
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
