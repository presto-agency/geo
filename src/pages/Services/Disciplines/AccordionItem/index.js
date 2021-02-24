import React, { useState } from 'react';
import {locoScroll} from "components/SmoothScroll";

const DisciplineSingleAccordion = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
        setTimeout(() => {
            locoScroll.update();
        }, 100);
    };

    return (
        <div className={`accordion ${collapsed ? '' : 'active'}`}>
            <div className="accordion-header">
                <div className="accordion-header-title">
                    <p className="h-2">Urban Planning & Master Planning</p>
                </div>
                <div className="accordion-header-btn" onClick={handleToggle}>
                    <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
                    </svg>
                </div>
            </div>
            <div className="accordion-content">
                <div className="accordion-content-description">
                    <p>Each master plan we undertake is dealt with in a holistic & unique approach, where it respects the local preferences, the surrounding urban fabric, and end-user requirements. We not only conceive the developers’ aspirations but we exceed them with our innovative solutions. We deal with all master developments size or context whether it is a small compound to a neighborhood to a city.</p>
                </div>
                <div className="accordion-projects">
                    <div className="accordion-projects-box">
                        <div className="project project-accordion">
                            <div className="project-preview">
                                <img src="https://images.unsplash.com/photo-1543892607-04657ef3a279?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
                            </div>
                            <div className="project-content">
                                <div className="project-content-title">
                                    <p className="project-title h-6">Binet Jbeil</p>
                                    <div className="project-tags">
                                        <p className="project-tag">Urban planning</p>
                                    </div>
                                </div>
                                <div className="project-content-action">
                                    <a href="#" className="project-action">
                                        <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisciplineSingleAccordion;