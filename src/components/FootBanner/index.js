import React from 'react';
import PropTypes from 'prop-types';

const FootBanner = ({ src }) => {
    return (
        <div className="foot-banner" id="foot-banner">
            <img
                src={src}
                alt="Footer banner"
                data-scroll={true}
                data-scroll-speed="-2"
                data-scroll-position="center"
            />
        </div>
    )
};

export default FootBanner;

FootBanner.propTypes = {
    src: PropTypes.string.isRequired
};