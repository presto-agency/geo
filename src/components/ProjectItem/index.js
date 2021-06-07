import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import routes from 'routes';

const ProjectItem = ({ project: { id, name, topImage, city, countryData, projectDate }, baseUrl }) => {

  const year = new Date(projectDate).getFullYear();

  return (
      <div className="project project-item">
          <Link to={`${routes.project.index}/${id}`} className="project-preview">
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
                    {!!projectDate ? <p className="project-tag">{new Date(projectDate).getFullYear()}</p> : null}
                    {/*{!!countryData ? <p className="project-tag" >{countryData.name}</p> : null }*/}
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