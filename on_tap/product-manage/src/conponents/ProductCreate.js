import * as ProductService from "../service/ProductService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {toast} from "react-toastify";

export const ProductCreate = () => {
    const navigate=useNavigate()
    return (
        <>
            <h1>Create Product</h1>
            <Formik
                initialValues={{
                    name: '',
                    quantity: '',
                    date: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name not empty"),
                    // email: Yup.string().required("Email not empty")
                    //     .matches("^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\\.[a-zA-Z0-9-.]+$", "Email format is incorrect"),
                    quantity: Yup.number().required("Phone not empty")
                })}
                onSubmit={(values) => {
                    const create = async () => {
                        await ProductService.saveProduct(values);
                    }
                    create();
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
        </>
    )
}
