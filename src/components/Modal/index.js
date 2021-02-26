import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Tween, { Power4 } from 'gsap';
import ModalDone from "./Done";
import ModalSearch from "./Search";

const Modal = () => {

    const modal = React.createRef();
    const { isOpen, type } = useSelector(state => state.modal);

    useEffect(() => {

        const modalContent = modal.current.querySelector('.modal-content');

        if(isOpen) {
            Tween.fromTo(modal.current,
            {
                yPercent: 100,
                pointerEvents: 'none',
                display: 'block',
                opacity: 1,
            },
            {
                duration: 1,
                yPercent: 0,
                pointerEvents: 'auto',
                ease: Power4.easeOut,
                onComplete: () => {
                    Tween.to(modalContent, {
                        delay: 0.5,
                        duration: 0.5,
                        opacity: 1,
                        ease: Power4.easeOut
                    })
                }
            });
        } else {
            Tween.to(modalContent, {
                duration: 0.5,
                opacity: 0,
                pointerEvents: 'auto',
                ease: Power4.easeOut,
                onComplete: () => {
                    Tween.to(modal.current, {
                        duration: 1,
                        yPercent: 100,
                        pointerEvents: 'none',
                        display: 'none',
                        ease: Power4.easeOut,
                    })
                }
            });
        }

    }, [isOpen]);

    const detectModal = (modal) => {
        switch (modal) {
            case 'done':
                return <ModalDone />;
            case 'search':
                return <ModalSearch />
        }
    };

    return (
        <div className="modal" ref={modal}>
            {detectModal(type)}
        </div>
    )
};

export default Modal;