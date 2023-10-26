import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as CategoryService from "../service/CategoryService";
import * as TypeService from "../service/TypeService";
import {format} from 'date-fns';

export const Create = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    let today = new Date();
    let formatToday = format(today, 'dd/mm/yyyy');


    useEffect(() => {
        findAll();
    }, []);

    const findAll = async () => {
        const res = await CategoryService.findAll();
        setCategories(res);
    }
    return (
        <>
            <div className="container">
                <h1>Thêm mới sản phẩm </h1>
                <Formik enableReinitialize={true}
                    initialValues={{
                        MaSP: '',
                        name: '',
                        categoryId: '',
                        price: "",
                        quantity: "",
                        date: "",
                        description: ""
                    }}
                    validationSchema={Yup.object({
                        MaSP: Yup.string().required("Mã sản phẩm bắt buộc phải nhập").matches("^PROD-\\d{4}$", "Tên SP phải có dịnh dạng PROD-xxxx (x là số)"),
                        name: Yup.string().required("Tên sản phẩm bắt buộc phải nhập"),
                        categoryId: Yup.string().required("Loại sản phẩm bắt buộc phải nhập"),
                        price: Yup.number().required("Giá  bắt buộc phải nhập"),

                        quantity: Yup.number()
                            .typeError("Số lượng phải là số nguyên")
                            .required("Số lượng bắt buộc phải nhập")
                            .integer("Số lượng phải là số nguyên")
                            .min(1, "Số lượng phải lớn hơn 0"),
                        date: Yup.string()
                            .required('bắt buộc nhập')
                            .matches(
                                /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
                                'Vui lòng nhập ngày theo định dạng dd/mm/yyyy'
                            )
                            .test('is-future', 'Ngày không được lớn hơn ngày hiện tại', function (value) {
                                let inputDate = new Date(value.split('/')[2], value.split('/')[1] - 1, value.split('/')[0]);
                                return inputDate <= today;
                            }),
                        description: Yup.string().required("Mô tả sản phảm bắt buộc phải nhập"),
                    })}
                    onSubmit={(values) => {
                        console.log(values.categoryId)
                        const create = async () => {
                            await TypeService.save(values);
                        }
                        create();
                        toast("Thêm mới thành công")
                        navigate("/");
                    }}>
                    <div>
                        <Form>

                            <div className="form-group">
                                <label htmlFor="quantity">Mã sản pham</label>
                                <Field name='MaSP' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity"/>
                                <ErrorMessage name="MaSP" component="span" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <Field name='name' type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                                <ErrorMessage name="name" component="span" className="text-danger"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                <Field name='categoryId' as="select" className="form-select form-select-sm"
                                       aria-label="Small select example"
                                >
                                    {
                                        categories.map((item) => (
                                            <option value={(item.id)}>{item.name}</option>
                                        ))
                                    }
                                </Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Giá </label>
                                <Field name='price' type="number" className="form-control" id="name"
                                       placeholder="Name"/>
                                <ErrorMessage name="price" component="span" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Số lượng </label>
                                <Field name='quantity' type="number" className="form-control" id="name"
                                       placeholder="Name"/>
                                <ErrorMessage name="quantity" component="span" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Ngày nhập sản phẩm</label>
                                <Field name='date' type="text" className="form-control" id="date"
                                       placeholder="Date"/>
                                <ErrorMessage name="date" component="span" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Mô tả sản phẩm</label>
                                <Field name='description' type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                                <ErrorMessage name="description" component="span" className="text-danger"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Thêm mới</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </>
    )
}
