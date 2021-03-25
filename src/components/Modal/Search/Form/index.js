import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';

import validationSchema from "./validationSchema";
import {searchProjects} from "store/projects/actions";

const SearchForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        query: ''
    };

    const onSubmit = (value) => {
        dispatch(searchProjects({ value, history }));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({ handleSubmit, handleChange, errors, values }) => (
                <Form className="modal-content-form" onSubmit={handleSubmit} >
                    <div className="input-container input-container-border __search">
                        <input
                            type="text"
                            name="query"
                            className="input"
                            value={values.query}
                            onChange={handleChange}
                        />
                        <button className="link-follow" type="submit">
                            Search
                            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-follow-icon">
                                <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
                            </svg>
                        </button>
                        <div className={`input-mark ${!!errors.query || !values.query ? '' : 'active'}`}>Search query</div>
                        <div className="input-error">{errors.query}</div>
                        <div className={`input-border ${!!values.query ? 'active' : ''}`} />
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default SearchForm;