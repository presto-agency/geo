import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import {openModal} from "store/modal/actions";
import {submitContact} from "store/contact/actions";

import validationSchema from "./validationSchema";

const Subscription = () => {

    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.contact);
    const [loadingState, setLoadingState] = useState(false);

    const initialValues = {
      email: ''
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
                        {
                            !!error
                                ? <p className="paragraph __error">Ooops, some wrongs, please reload the page and try again</p>
                                : null
                        }
                    </div>
                </Form>
            )
        }
        </Formik>
    )
};

export default Subscription;