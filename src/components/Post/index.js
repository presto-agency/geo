import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'routes'

const Post = ({ post: { id, preview, title, description } }) => {
    return (
        <div className="post">
            <Link to={`${routes.news.index}/${id}`} className="post-preview parallax">
                <img src={preview} alt={title} />
            </Link>
            <div className="post-content">
                <div className="post-tags">
                    <span className="post-tags-item">#solar</span>
                    <span className="post-tags-item">#aboutsun</span>
                    <span className="post-tags-item">#battery</span>
                </div>
                <Link to={`${routes.news.index}/${id}`} className="post-title h-4">{title}</Link>
                <p className="post-description">{description}</p>
            </div>
        </div>
    )
};

export default Post;

Post.propTypes = {
    post: PropTypes.object.isRequired
};