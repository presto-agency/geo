import React from 'react';

import ProjectAccordion from "pages/Services/Disciplines/Project";

const SimilarProjects = ({ data }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="accordion-projects fade-on-scroll">
                            {
                                data.slice(0,2).map((project, key) => <ProjectAccordion project={project} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SimilarProjects;