import {useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as BookService from "../../service/BookService";
import {useEffect} from "react";

export const UpdateBook = () => {
    const {id} = useParams();
    useEffect(() => {
        findById();
    }, [])
    const findById = async () => {
        const result = await BookService.findByIdBook({id});
        console.log(result)
        console.log("A")
    }

    return (
        <>
            <>
                <Formik
                    initialValues={{
                        title: '',
                        quantity: ''
                    }}
                    onSubmit={(values) => {
                        // const create = async() => {
                        //     await BookService.saveBook(values);
                        //     alert(values.title)
                        // }
                    }}>
                    <div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field name='title' type="text" className="form-control" id="title"
                                       placeholder="title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <Field name='quantity' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity"/>
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
