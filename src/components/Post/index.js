import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import routes from 'routes'

const Post = ({ post: { id, topImage, title, description, tags }, baseUrl }) => {
    return (
        <div className="post">
            <Link to={`${routes.news.index}/${id}`} className="post-preview">
                <div className="post-preview-box">
                    <img
                        src={!!topImage ? baseUrl + topImage.url : 'https://via.placeholder.com/300/?text=GEO article'}
                        alt={title}
                    />
                </div>
            </Link>
            <div className="post-content">
                {
                    !!tags.length
                    ? (
                        <div className="post-tags">
                            {
                                tags.map((tag, key) => (
                                    <span className="post-tags-item" key={key}>#{tag.name}</span>
                                ))
                            }
                        </div>
                    ) : null
                }
                <Link to={`${routes.news.index}/${id}`} className="post-title h-4">{title}</Link>
                <p className="post-description">{description}</p>
            </div>
        </div>
    )
};

export default WithBaseUrl()(Post);

Post.propTypes = {
    post: PropTypes.object.isRequired
};