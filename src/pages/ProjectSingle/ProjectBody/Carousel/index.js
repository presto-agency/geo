import React, { useState } from 'react';
import Slider from "react-slick";
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import ProjectPageCarouselSlide from "./Slide";

const ProjectPageCarousel = ({ data }) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);

    const carousel = React.createRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        beforeChange: (index, nextIndex) => {
            setCurrentSlide(nextIndex + 1);
        },
    };

    const next = () => {
        carousel.current.slickNext();
    };

    const prev = () => {
        carousel.current.slickPrev();
    };

    return (
        <div className="project-page-carousel">
            <div className="carousel-nav">
                <CarouselNav
                    onNext={next}
                    onPrev={prev}
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                />
                <CarouselPagination
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                />
            </div>
            <Slider ref={carousel} className="projects-carousel" {...settings}>
                {
                    data.map((project, key) => (
                        <ProjectPageCarouselSlide project={project} key={key} />
                    ))
                }
            </Slider>
        </div>
    )
};

export default ProjectPageCarousel;