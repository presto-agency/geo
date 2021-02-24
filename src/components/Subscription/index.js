import React from 'react';
import { Formik, Form } from 'formik';
import validationSchema from "./validationSchema";

const Subscription = () => {

    const initialValues = {
      email: ''
    };

    const onSubmit = (value) => {
        console.log(value);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
        {
            ({ handleSubmit, handleChange, errors, values }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="subscription">
                        <p className="nav-title">Get in touch</p>
                        <div className="subscription-container">
                            <div className={`input-container input-container-border ${!!errors.email ? 'error' : ''}`}>
                                <input
                                    type="text"
                                    name="email"
                                    className="input"
                                    placeholder="Email Address"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <div className="input-error">{errors.email}</div>
                                <div className={`input-border ${!!values.email ? 'active' : ''}`} />
                                <button className="subscription-btn" type="submit" />
                            </div>
                        </div>
                    </div>
                </Form>
            )
        }
        </Formik>
    )
};

export default Subscription;