import React, { useEffect } from 'react';
import Slider from 'react-slick';

const CarouselPagination = ({ currentSlide, totalSlides }) => {

    const carousel = React.createRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
    };

    useEffect(() => {
        // console.log(currentSlide);
    }, [currentSlide]);

    return (
        <div className="carousel-nav-pagination">
            <div className="h-4">
                {currentSlide}
                <span className="blue">/{totalSlides}</span>
            </div>
        </div>
    )
};

export default CarouselPagination;