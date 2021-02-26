import React from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "store/modal/actions";
import SearchForm from "./Form";

const ModalSearch = () => {

    const dispatch = useDispatch();

    return (
        <div className="modal-box __search">
            <div className="modal-close-btn" onClick={() => dispatch(closeModal())}>
                <svg viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.35355" y1="0.646447" x2="21.3536" y2="20.6464"/>
                    <line x1="0.646447" y1="20.6464" x2="20.6464" y2="0.646447"/>
                </svg>
            </div>
            <div className="modal-content">
                <p className="modal-content-title h-2">What are you looking for?</p>
                <SearchForm />
            </div>
        </div>
    )
};

export default ModalSearch;