import React from 'react';
import ProjectVideo from "./Video";

const ProjectSlide = ({ project }) => {
    return (
        <div className="projects-carousel-slide">
            <div className="project">
                <div className="project-preview">
                    { !!project.video.url
                        ? <ProjectVideo
                            project={project} />
                        : <img
                            src={project.preview}
                            alt={project.title} /> }
                </div>
                {
                    !!project.title
                    ? (
                            <div className="project-content">
                                <div className="project-content-title">
                                    <p className="project-title h-6">{project.title}</p>
                                    <div className="project-tags">
                                        {
                                            project.tags.map((tag, key) => (
                                                <p className="project-tag" key={key}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="project-content-description">
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                        ) : null
                }
            </div>
        </div>
    )
};

export default ProjectSlide;