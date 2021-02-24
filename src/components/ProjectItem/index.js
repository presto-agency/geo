import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';

const ProjectItem = ({ project: { id, title, preview, tags } }) => {
    return (
        <div className="project project-item">
            <Link to={`${routes.project.index}/${id}`} className="project-preview">
                <img src={preview} alt={title} />
            </Link>
            <div className="project-content">
                <div className="project-content-title">
                    <p className="project-title h-6">{title}</p>
                    <div className="project-tags">
                        {
                            tags.map((tag, key) => (
                                <p className="project-tag" key={key}>{tag}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectItem;