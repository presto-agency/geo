import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import validationSchema from "./validationScheme";
import {openModal} from "store/modal/actions";
import {submitContact} from "store/contact/actions";

const FeedbackForm = () => {

    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.contact);
    const [loadingState, setLoadingState] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

    useEffect(() => {
        if(!loading && loadingState) {
            setLoadingState(false);
            if(!error){
                dispatch(openModal('done'));
            }
        }
    }, [loading]);

    const onSubmit = (value, formikBag) => {
        dispatch(submitContact(value));
        setLoadingState(true);
        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {
                ({ handleSubmit, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={`input-container ${!!errors.name ? 'error' : ''}`}>
                            <span className="input-label">Name</span>
                            <Field
                                type="text"
                                className="input"
                                name="name"
                            />
                            <div className="input-error">{errors.name}</div>
                        </div>
                        <div className={`input-container ${!!errors.email ? 'error' : ''}`}>
                            <span className="input-label">Email</span>
                            <Field
                                type="text"
                                className="input"
                                name="email"
                            />
                            <div className="input-error">{errors.email}</div>
                        </div>
                        <div className="input-container">
                            <span className="input-label">Message</span>
                            <Field
                                component="textarea"
                                className="textarea"
                                name="message"
                            />
                        </div>
                        <button className="link-btn" type="submit">Send</button>
                        {
                            !!error
                            ? <p className="paragraph __error">Ooops, some wrongs, please reload the page and try again</p>
                            : null
                        }
                    </Form>
                )
            }
        </Formik>
    )
};

export default FeedbackForm;