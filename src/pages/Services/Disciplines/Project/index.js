import React from 'react';
import { Link } from 'react-router-dom';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import routes from 'routes'

const ProjectAccordion = ({ project: { id, topImage, name, countryData, city }, baseUrl }) => {
    return (
        <div className="accordion-projects-box">
            <div className="project project-accordion">
                <Link to={`${routes.project.index}/${id}`} className="project-preview parallax">
                    <div className="project-preview-box">
                        {
                            !!topImage
                                ? (
                                    <img
                                        src={!!topImage.formats.large
                                            ? baseUrl + topImage.formats.large.url
                                            : baseUrl + topImage.url}
                                        alt={name}
                                    />
                                )
                                : (
                                    <img src="https://via.placeholder.com/760x760?text=GeoCo project" alt={name} />
                                )
                        }
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
                    <div className="project-content-action">
                        <Link to={`${routes.project.index}/${id}`} className="project-action">
                            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WithBaseUrl()(ProjectAccordion);