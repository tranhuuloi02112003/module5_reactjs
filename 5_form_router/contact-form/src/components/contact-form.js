import {Formik, Field, Form} from "formik";
import {useState} from "react";

export function ContactForm() {
    // const [form, setForm] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     message: ""
    // });

    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                onSubmit={async values => {
                    // if (!Number(values.email)) {
                    //     alert("Số điện thoại chỉ được nhập số");
                    // } else alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nhập tên"
                    />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Nhập email"
                    />
                    <label htmlFor="phone">Phone</label>

                    <Field
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Nhập sdt"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );

}
