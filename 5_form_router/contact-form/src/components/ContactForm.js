import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {ColorRing} from 'react-loader-spinner';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name not empty"),
                    email: Yup.string().required("Email not empty")
                        .matches("^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\\.[a-zA-Z0-9-.]+$", "Email format is incorrect"),
                    phone: Yup.string().required("Phone not empty")
                })}
                onSubmit={async values => {
                    console.log(values)
                    toast("Add contact successfully!!!");
                }}>

                <div>
                    <h1>Contact Form</h1>
                    <Form>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <Field name="name" type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                            </div>
                            <ErrorMessage name="name" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <Field name="email" type="email" className="form-control" id="inputEmail"
                                       placeholder="Email"/>
                            </div>
                            <ErrorMessage name="email" component="span" className="text-danger"/>

                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <Field name="phone" type="text" className="form-control" id="phone"
                                       placeholder="Phone"/>
                            </div>
                            <ErrorMessage name="phone" component="span" className="text-danger"/>

                        </div>
                        <div className="form-group row">
                            <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                            <div className="col-sm-10">
                                <Field name="message" type="text" className="form-control" id="message"
                                       placeholder="Message"/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#100f0f', '#29ec0e', '#100f0f', '#29ec0e', '#849b87']}
                        />
                    </Form>
                </div>
            </Formik>
            <ToastContainer/>
        </>
    )
}


/*  <fieldset className="form-group">
      <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
          <div className="col-sm-10">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                         value="option1" checked>
                      <label className="form-check-label" htmlFor="gridRadios1">
                          First radio
                      </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                         value="option2">
                      <label className="form-check-label" htmlFor="gridRadios2">
                          Second radio
                      </label>
              </div>
              <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                         value="option3" disabled>
                      <label className="form-check-label" htmlFor="gridRadios3">
                          Third disabled radio
                      </label>
              </div>
          </div>
      </div>
  </fieldset>
  <div className="form-group row">
                      <div className="col-sm-2">Checkbox</div>
                      <div className="col-sm-10">
                          <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="gridCheck1">
                                  <label className="form-check-label" htmlFor="gridCheck1">
                                      Example checkbox
                                  </label>
                          </div>
                      </div>
                  </div>
*/

