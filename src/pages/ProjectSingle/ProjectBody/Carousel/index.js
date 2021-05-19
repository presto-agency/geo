import React, { useState } from 'react';
import Slider from "react-slick";
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import ProjectPageCarouselSlide from "./Slide";
import ProjectPageCarouselVideo from "./Video";

const ProjectPageCarousel = ({ data, video, baseUrl }) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(!!video ? data.sliderMedia.length + 1 : data.sliderMedia.length);

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
            {
                data.sliderMedia.length > 1
                ? (
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
                ) : null
            }
            <Slider ref={carousel} className="projects-carousel" {...settings}>
                {
                    !!video
                    ? (
                        <ProjectPageCarouselVideo
                            key="key"
                            video={video}
                            data={data}
                            baseUrl={baseUrl} />
                    ) : null
                }
                {
                    !!data.sliderMedia.length
                    ? (
                        data.sliderMedia.map((project, key) => (
                            <ProjectPageCarouselSlide
                                key={key}
                                project={project}
                                video={video}
                                baseUrl={baseUrl}/>
                        ))
                    ) : null
                }
            </Slider>
        </div>
    )
};

export default ProjectPageCarousel;