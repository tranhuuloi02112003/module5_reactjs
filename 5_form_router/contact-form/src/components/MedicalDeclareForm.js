import {ErrorMessage, Field, Form, Formik} from "formik";
import './MedicalDeclareForm.css';
import * as Yup from "yup";


export function MedicalDeclareForm() {
    return (
        <>
            <h1>Tờ khai y tế</h1>
            <Formik
                initialValues={{
                    name: '',
                    idCard: '',
                    birthYear: '',
                    gender: '0',
                    international: '',
                    workingCompany: '',
                    workingParts: '',
                    healthInsurance: '',
                    province: '',
                    district: '',
                    wards: '',
                    apartmentNumber: '',
                    phone: '',
                    email: '',
                    toTheCountry: '',
                    sign: '',
                    contact: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name not empty"),
                    idCard: Yup.number().required("CMND not empty"),
                    birthYear: Yup.number().required("Birth Year not empty").min(1900),
                    international: Yup.string().required("International not empty"),
                    province: Yup.string().required("Province not empty"),
                    district: Yup.string().required("District not empty"),
                    wards: Yup.string().required("Wards not empty"),
                    apartmentNumber: Yup.string().required("Apartment Number not empty"),
                    phone: Yup.number().required("Phone not empty"),
                    email: Yup.string().required("Email not empty")
                        .matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
                            "Invalid email address”")
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <div>
                    <Form>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Họ tên</label>
                            <div className="col-sm-10">
                                <Field name="name" type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                            </div>
                            <ErrorMessage name="name" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="idCard" className="col-sm-2 col-form-label">Số hộ chiếu/CMND</label>
                            <div className="col-sm-10">
                                <Field name="idCard" type="text" className="form-control" id="idCard"
                                       placeholder="CMND"/>
                            </div>
                            <ErrorMessage name="idCard" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="birthYear" className="col-sm-2 col-form-label">Năm sinh</label>
                            <div className="col-sm-10">
                                <Field name="birthYear" type="text" className="form-control" id="birthYear"
                                       placeholder="Birth Year"/>
                            </div>
                            <ErrorMessage name="birthYear" component="span" className="text-danger"/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                            <div className="form-check form-check-inline">
                                <Field name="gender" value="1" type="radio"
                                       className="form-check-input" id="gender"/>
                                <label htmlFor="gender" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field name="gender" value="0" type="radio"
                                       className="form-check-input" id="gender"/>
                                <label htmlFor="gender" className="form-check-label">FeMale</label>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="birthYear" className="col-sm-2 col-form-label">Quốc tịch</label>
                            <div className="col-sm-10">
                                <Field name="international" type="text" className="form-control" id="international"
                                       placeholder="International"/>
                            </div>
                            <ErrorMessage name="international" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="birthYear" className="col-sm-2 col-form-label">Công ty làm việc</label>
                            <div className="col-sm-10">
                                <Field name="workingCompany" type="text" className="form-control" id="workingCompany"
                                       placeholder="Working Company"/>
                            </div>
                            {/*<ErrorMessage name="name" component="span" className="text-danger"/>*/}
                        </div>

                        <div className="form-group row">
                            <label htmlFor="workingParts" className="col-sm-2 col-form-label">Bộ phân làm việc</label>
                            <div className="col-sm-10">
                                <Field name="workingParts" type="text" className="form-control" id="workingParts"
                                       placeholder="Working Parts"/>
                            </div>
                            {/*<ErrorMessage name="name" component="span" className="text-danger"/>*/}
                        </div>

                        <div className="form-group row">
                            <label htmlFor="healthInsurance" className="col-sm-2 col-form-label">Có bảo hiểm y tế</label>
                            <Field name="healthInsurance" type="checkbox" className="form-check-input"
                                   id="healthInsurance"
                                   placeholder="Health Insurance"/>
                        </div>

                        <h3>Thông tin liên hệ tại Việt Nam</h3>

                        <div className="form-group row">
                            <label htmlFor="province" className="col-sm-2 col-form-label">Tỉnh thành</label>
                            <div className="col-sm-10">
                                <Field name="province" type="text" className="form-control" id="province"
                                       placeholder="Province"/>
                            </div>
                            <ErrorMessage name="province" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="district" className="col-sm-2 col-form-label">Quận/huyện</label>
                            <div className="col-sm-10">
                                <Field name="district" type="text" className="form-control" id="district"
                                       placeholder="District"/>
                            </div>
                            <ErrorMessage name="district" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="wards" className="col-sm-2 col-form-label">Phường/xã</label>
                            <div className="col-sm-10">
                                <Field name="wards" type="text" className="form-control" id="wards"
                                       placeholder="Wards"/>
                            </div>
                            <ErrorMessage name="wards" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="apartmentNumber" className="col-sm-2 col-form-label">Số nhà, phố, tổ dân phố
                                /thôn /đội</label>
                            <div className="col-sm-10">
                                <Field name="apartmentNumber" type="text" className="form-control" id="apartmentNumber"
                                       placeholder="Apartment Number"/>
                            </div>
                            <ErrorMessage name="apartmentNumber" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Điện thoại</label>
                            <div className="col-sm-10">
                                <Field name="phone" type="text" className="form-control" id="phone"
                                       placeholder="Phone"/>
                            </div>
                            <ErrorMessage name="phone" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <Field name="email" type="text" className="form-control" id="email"
                                       placeholder="Email"/>
                            </div>
                            <ErrorMessage name="email" component="span" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="toTheCountry" className="form-label"><h6>Trong vòng 14 ngày qua,Anh/Chị có đến quốc gia/vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</h6></label>
                            <Field name="toTheCountry" type="text" className="form-control" id="toTheCountry"/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="sign" className="form-label"><h6>Trong vòng 14 ngày qua,Anh/Chị có thấy xuất hiện triệu chứng nào sau đây không?</h6></label>
                            <br/>
                            <Field name="sign" value="Sốt"  type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Sốt</label>
                            <br/>
                            <Field name="sign"  value="Ho" type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Ho</label>
                            <br/>
                            <Field name="sign" value="Khó thở"  type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Khó thở</label>
                            <br/>
                            <Field name="sign"  value="Viêm phổi" type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Viêm phổi</label>
                            <br/>
                            <Field name="sign" value="Đau họng"  type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Đau họng</label>
                            <br/>
                            <Field name="sign"  value="Mệt mỏi" type="checkbox" className="form-check-input" id="sign"/>
                            <label className="form-check-label" htmlFor="sign">Mệt mỏi</label>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="contact" className="form-label"><h6>Trong vòng 14 ngày qua,Anh/Chị có tiếp xúc với?</h6></label>
                            <br/>
                            <Field name="contact" value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"  type="checkbox" className="form-check-input" id="contact"/>
                            <label className="form-check-label" htmlFor="contact">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                            <br/>
                            <Field name="contact"  value="Người từ nước có bệnh COVID-19" type="checkbox" className="form-check-input" id="contact"/>
                            <label className="form-check-label" htmlFor="contact">Người từ nước có bệnh COVID-19</label>
                            <br/>
                            <Field name="contact" value="Nguời có biểu hiện (Sốt, ho, khó thở, viêm phổi)"  type="checkbox" className="form-check-input" id="contact"/>
                            <label className="form-check-label" htmlFor="contact">Nguời có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </Form>
                </div>
            </Formik>
        </>
    );
}


