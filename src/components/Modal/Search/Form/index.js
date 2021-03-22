import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {isEmpty} from "utils/detectEmptyObject";
import routes from 'routes';
import validationSchema from "./validationSchema";
import {searchProjects} from "store/projects/actions";
import { closeModal } from "store/modal/actions";

const SearchForm = () => {

    const dispatch = useDispatch();
    const result = useSelector((state) => state.projects.selected.data);
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if(!isEmpty(result)) {
            dispatch(closeModal());
            history.push(`${routes.searchResult}/?query=${searchQuery}`);
        }
    }, [result]);

    const initialValues = {
        query: ''
    };

    const onSubmit = (value) => {
        dispatch(searchProjects(value));
        setSearchQuery(value.query);
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