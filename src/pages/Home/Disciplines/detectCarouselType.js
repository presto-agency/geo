import React, {Fragment, useState} from 'react';
import Slider from 'react-slick';
import CarouselNav from "components/CarouselNav";

const DetectCarouselType = (props) => {

    const mobileCarousel = React.createRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(props.data.length);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (index, nextIndex) => {
            setCurrentSlide(nextIndex + 1);
        },
    };

    const next = () => {
        mobileCarousel.current.slickNext();
    };

    const prev = () => {
        mobileCarousel.current.slickPrev();
    };

    if(window.innerWidth > 991) {
        return props.children
    }

    return (
        <Fragment>
            <CarouselNav
                onNext={next}
                onPrev={prev}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
            />
            <Slider
                {...settings}
                className="disciplines-mobile-carousel"
                ref={mobileCarousel}>
                {props.children}
            </Slider>
        </Fragment>
    )

};

export default DetectCarouselType;