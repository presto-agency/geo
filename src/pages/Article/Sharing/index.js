import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    PinterestShareButton,
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share';

const _baseURL = process.env.REACT_APP_API_URL;

const Sharing = ({ data: { title, description, topImage } }) => {

    const location = window.location.href;

    return (
        <Fragment>
            <PinterestShareButton
                className="link-social"
                url={location}
                media={_baseURL + topImage.formats.medium.url}
                description={description}
            />
            <FacebookShareButton
                className="link-social"
                url={location}
            />
            <TwitterShareButton
                className="link-social"
                url={location}
                title={title}
            />
            <LinkedinShareButton
                className="link-social"
                url={location}
                title={title}
                summary={description}
                source={location}
            />
        </Fragment>
    )
};

export default Sharing;

Sharing.propTypes = {
    data: PropTypes.object
};