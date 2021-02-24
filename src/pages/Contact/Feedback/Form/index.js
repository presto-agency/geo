import React from 'react';
import { Formik, Form } from 'formik';
import validationSchema from "./validationScheme";

const FeedbackForm = () => {

    const initialValues = {
        name: '',
        email: '',
        message: ''
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
                        <div className={`input-container ${!!errors.name ? 'error' : ''}`}>
                            <span className="input-label">Name</span>
                            <input
                                type="text"
                                className="input"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <div className="input-error">{errors.name}</div>
                        </div>
                        <div className={`input-container ${!!errors.email ? 'error' : ''}`}>
                            <span className="input-label">Email</span>
                            <input
                                type="text"
                                className="input"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <div className="input-error">{errors.email}</div>
                        </div>
                        <div className="input-container">
                            <span className="input-label">Message</span>
                            <textarea
                                className="textarea"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="link-btn" type="submit">Send</button>
                    </Form>
                )
            }
        </Formik>
    )
};

export default FeedbackForm;