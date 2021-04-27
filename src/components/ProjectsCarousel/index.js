import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import WithBaseUrl from "components/Hoc/withBaseUrl";
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import ProjectVideo from "./Video";

const ProjectsCarousel = ({ data, baseUrl }) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        data.map(project => {
           setProjects(projects => [...projects, { ...project, youtubeVideoPlaying: false }]);
        });
    }, [data]);

    useEffect(() => {
        console.log(projects);
    }, [projects]);

    const togglePlayingVideo = (project) => {
        // setProjects(projects => [...projects, project]);
        setProjects(
            projects.map(
                (option) => option.id === project.id ? { ...option, youtubeVideoPlaying : !option.youtubeVideoPlaying } : option
            )
        );
    };

    const stopPlayAllVideos = () => {
        projects.forEach(project => {
            Object.defineProperty(project, 'youtubeVideoPlaying', {
                value: false,
                writable: true
            });
        });
        return projects;
    };

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
            setProjects(stopPlayAllVideos);
        },
        afterChange: () => {

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
                    projects.map((project, key) => (
                        <div className="projects-carousel-slide" key={key}>
                            <div className="project">
                                <div className="project-preview">
                                    { !!project.youtubeVideoLink
                                        ? <ProjectVideo
                                            project={project}
                                            baseUrl={baseUrl}
                                            togglePlaying={togglePlayingVideo} />
                                        : <img
                                            src={baseUrl + project.topImage.formats.large.url || ''}
                                            alt={project.name} /> }
                                </div>
                                <div className="project-content">
                                    <div className="project-content-title">
                                        <p className="project-title h-6">{project.name}</p>
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