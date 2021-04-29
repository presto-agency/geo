import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import routes from 'routes';

const ProjectItem = ({ project: { id, name, topImage, city, countryData }, baseUrl }) => {

    return (
        <div className="project project-item">
            <Link to={`${routes.project.index}/${id}`} className="project-preview">
                <div className="project-preview-box">
                    <img
                        src={!!topImage ? baseUrl + topImage.url : 'https://via.placeholder.com/300/?text=GEO project'}
                        alt={name}
                    />
                </div>
            </Link>
            <div className="project-content">
                <div className="project-content-title">
                    <p className="project-title h-6">{name}</p>
                    <div className="project-tags">
                        {!!countryData ? <p className="project-tag" >{countryData.name}</p> : null }
                        {!!city ? <p className="project-tag" >{city}</p> : null }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WithBaseUrl()(ProjectItem);

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
};