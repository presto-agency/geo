import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import Slider from 'react-slick';
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import {stopPlayingAllVideos} from "store/projects/actions";
import ProjectSlide from "./Slide";

const ProjectsCarousel = ({ data }) => {

    const dispatch = useDispatch();
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
            dispatch(stopPlayingAllVideos(stopAllPlaying()));
        },
    };

    const stopAllPlaying = () => {
        data.forEach(project => {
            Object.defineProperty(project.video, 'playing', {
                value: false,
                writable: true
            });
        });
        return data;
    };

    const next = () => {
        carousel.current.slickNext();
    };

    const prev = () => {
        carousel.current.slickPrev();
    };

    return (
        <Fragment>
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
                        <ProjectSlide project={project} key={key} />
                    ))
                }
            </Slider>
        </Fragment>
    )
};

export default ProjectsCarousel;

ProjectsCarousel.propTypes = {
    data: PropTypes.array.isRequired
};