import React from 'react';
import Slider from 'react-slick';

const DetectCarouselType = (props) => {

    const mobileCarousel = React.createRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if(window.innerWidth > 991) {
        return props.children
    }

    return (
        <Slider
            {...settings}
            className="disciplines-mobile-carousel"
            ref={mobileCarousel}>
            {props.children}
        </Slider>
    )

};

export default DetectCarouselType;