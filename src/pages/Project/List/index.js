import React from 'react';
import { useSelector } from 'react-redux';
import ProjectItem from "components/ProjectItem";

const ProjectsList = () => {

    const { data } = useSelector(state => state.projects);

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