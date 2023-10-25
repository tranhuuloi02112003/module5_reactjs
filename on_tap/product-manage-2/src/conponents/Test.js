const Test = () => {
    return (

        <>
            <Formik
                initialValues={{name: '', quantity: ''}}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name not empty"),
                    quantity: Yup.number().typeError("Quantity must be a number").required("Phone not empty")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting, isValid}) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name='name' type="text" className="form-control" id="name" placeholder="Name"/>
                            <ErrorMessage name="name" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity"/>
                            <ErrorMessage name="quantity" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary"
                                    disabled={isSubmitting || !isValid}>Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik></>
    )
}
