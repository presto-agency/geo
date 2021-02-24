import React, { useState } from 'react';
import {locoScroll} from "components/SmoothScroll";
import ProjectAccordion from "../Project";

const DisciplineSingleAccordion = ({ discipline: { discipline, description, projects } }) => {

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
                    <p className="h-2">{discipline}</p>
                </div>
                <div className="accordion-header-btn" onClick={handleToggle}>
                    <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
                    </svg>
                </div>
            </div>
            <div className="accordion-content">
                <div className="accordion-content-description">
                    <p>{description}</p>
                </div>
                <div className="accordion-projects">
                    {
                        projects.map((project, key) => <ProjectAccordion project={project} key={key} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default DisciplineSingleAccordion;