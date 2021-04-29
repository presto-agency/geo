import React  from 'react';

const ProjectPageCarouselSlide = ({ project, baseUrl }) => {

    return (
        <div className="projects-carousel-slide">
            <div className="project">
                <div className="project-preview">
                    <img
                        src={baseUrl + project.formats.large.url}
                        alt={project.alternativeText || project.name} />
                </div>
            </div>
        </div>
    )
};

export default ProjectPageCarouselSlide;