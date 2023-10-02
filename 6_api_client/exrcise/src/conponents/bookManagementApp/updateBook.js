import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as BookService from "../../service/BookService";
import {useEffect, useState} from "react";

export const UpdateBook = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState({
        id:'',
        title:'',
        quantity:''
    });
    useEffect(() => {
        findById();
    })
    const findById = async () => {
        const result = await BookService.findByIdBook(id);
        setBook(result);
    }

    return (
        <>
            <>
                <Formik
                    initialValues={{
                        title: "",
                        quantity: ""
                    }}
                    onSubmit={(values) => {
                        const update = async() => {
                            await BookService.updateBook(id,values);
                        }
                        update();
                        navigate("/");

                    }}>
                    <div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field name='title' type="text" className="form-control" id="title"
                                       placeholder="title" value={book.title} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <Field name='quantity' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity" value={book.quantity}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </>
        </>
    )
}
