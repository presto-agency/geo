import React from 'react';

import ProjectItem from "components/ProjectItem";

const ProjectsList = ({ data }) => {

    return (
        <div className="projects-list">
            {
                data.map((project, key) => (
                    <div className="projects-list-box" key={key}>
                        <ProjectItem project={project} />
                    </div>
                ))
            }
        </div>
    )
};

export default ProjectsList;