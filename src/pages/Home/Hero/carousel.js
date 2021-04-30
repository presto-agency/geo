import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import WithBaseUrl  from 'components/Hoc/withBaseUrl';

const HeroCarousel = ({ defaultImages, baseUrl }) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'cubic-bezier(0.6, 0, 0.36, 1)',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: true,
        pauseOnHover: false
    };

    if(!defaultImages) {
        return <Fragment />
    }

    return (
        <Slider
            className="hero-carousel" {...settings}>
            {
                defaultImages.map((image, key) => (
                    <div className="hero-carousel-slide" key={key}>
                        {/*<img*/}
                        {/*    srcSet={`*/}
                        {/*        ${baseUrl + image.url} 1920w,*/}
                        {/*        ${baseUrl + image.formats.medium.url} 576w`}*/}
                        {/*    sizes="*/}
                        {/*        (max-width: 1920px) 1920w,*/}
                        {/*        (max-width: 576px) 576w"*/}
                        {/*    src={baseUrl + image.url}*/}
                        {/*    alt={image.alternativeText || image.hash}*/}
                        {/*/>*/}
                        <img src={baseUrl + image.url} alt={image.alternativeText || image.hash} />
                    </div>
                ))
            }
        </Slider>
    )
};

export default WithBaseUrl()(HeroCarousel);

HeroCarousel.propsTypes = {
    defaultImages: PropTypes.array.isRequired
};