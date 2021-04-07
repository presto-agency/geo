import React from 'react';

import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import ProjectItem from "components/ProjectItem";

const ProjectsList = ({ data }) => {

    if(isEmpty(data)){
        return <Preloader />
    }

    if(!data.length) {
        return <p>Nothing found</p>
    }

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