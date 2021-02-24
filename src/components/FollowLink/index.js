import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FollowLink = ({ to, title }) => {
    return (
        <Link to={to} className="link-follow">
            {title}
            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-follow-icon">
                <path d="M18.8692 0L17.7111 1.15817L22.8647 6.31184L0 6.31184L0 7.94977L22.8647 7.94977L17.7111 13.1034L18.8692 14.2616L26 7.13075L18.8692 0Z" />
            </svg>
        </Link>
    )
};

export default FollowLink;

FollowLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};