import React from 'react';
import { useDispatch } from 'react-redux';
import { TweenLite, Power4 } from "gsap";
import {closeModal} from "store/modal/actions";

const ModalDone = () => {

    const dispatch = useDispatch();
    const btn = React.createRef();

    const handleMove = (event) => {
        TweenLite.to(btn.current, 1, {
            opacity: 1,
            left: ( event.clientX - 34 ),
            top: ( event.clientY - 34 ),
            ease: Power4.easeOut
        });
    };

    return (
        <div className="modal-box __done">
            <div className="modal-close" onMouseMove={(event) => handleMove(event)} />
            <div className="modal-close-btn" ref={btn} onClick={() => dispatch(closeModal())}>
                <svg viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.35355" y1="0.646447" x2="21.3536" y2="20.6464"/>
                    <line x1="0.646447" y1="20.6464" x2="20.6464" y2="0.646447"/>
                </svg>
            </div>
            <div className="modal-content">
                <p className="modal-content-title h-2">Thank you!</p>
                <p className="modal-content-subtitle h-3">You’ll get the answer from us soonest!</p>
            </div>
        </div>
    )
};

export default ModalDone;