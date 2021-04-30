import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import routes from 'routes';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import ProjectVideo from "./Video";

const ProjectsCarousel = ({ data, baseUrl }) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     data.map(project => {
    //        setProjects(projects => [...projects, { ...project, youtubeVideoPlaying: false }]);
    //     });
    // }, [data]);

    // const togglePlayingVideo = (project) => {
    //     setProjects(
    //         projects.map(
    //             (option) => option.id === project.id ? { ...option, youtubeVideoPlaying : !option.youtubeVideoPlaying } : option
    //         )
    //     );
    // };

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
        }
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
                        <div className="projects-carousel-slide" key={key}>
                            <div className="project">
                                <div className="project-preview">
                                    { !!project.youtubeVideoLink
                                        ? <ProjectVideo
                                            project={project}
                                            baseUrl={baseUrl} />
                                        : <img
                                            src={!!project.topImage
                                                ? baseUrl + project.topImage.formats.large.url
                                                : 'https://via.placeholder.com/300/?text=GEO project'}
                                            alt={project.name} /> }
                                </div>
                                <div className="project-content">
                                    <div className="project-content-title">
                                        <Link to={`${routes.project.index}/${project.id}`} className="project-title h-6">{project.name}</Link>
                                        <div className="project-tags">
                                            {!!project.countryData ? <p className="project-tag" >{project.countryData.name}</p> : null }
                                            {!!project.city ? <p className="project-tag" >{project.city}</p> : null }
                                        </div>
                                    </div>
                                    <div className="project-content-description">
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </Fragment>
    )
};

export default WithBaseUrl()(ProjectsCarousel);

ProjectsCarousel.propTypes = {
    data: PropTypes.array.isRequired
};