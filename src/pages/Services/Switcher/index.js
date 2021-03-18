import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';

import CarouselNav from "components/CarouselNav";

import CarouselPagination from "components/CarouselPagination";
import {locoScroll} from "components/SmoothScroll";
import Preloader from "components/Preloader";
import ServiceSlide from "./Slide";
import ServicesTab from "./Tab";

import {isEmpty} from "utils/detectEmptyObject";
import {switchDisciplines} from "store/disciplines/actions";

const Switcher = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.services);
    const carousel = React.createRef();
    const tabsCarousel = React.createRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);

    useEffect(() => {
        setTotalSlides(data.length);

        // load first services disciplines
        if(!isEmpty(data)){
            dispatch(switchDisciplines(data[0].disciplines));
        }
    }, [data]);

    const tabsSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        cssEase: 'ease',
        slidesToShow: 6,
        slidesToScroll: 2,
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        adaptiveHeight: true,
        beforeChange: (index, nextIndex) => {
            setCurrentSlide(nextIndex + 1);
            locoScroll.scrollTo('#services-switcher', { duration: 10 });

            // load selected services disciplines
            dispatch(switchDisciplines(data[nextIndex].disciplines));

            setTimeout(() => {
                locoScroll.update();
            }, 100);
        },
    };

    const next = () => {
        carousel.current.slickNext();
        tabsCarousel.current.slickNext();
    };

    const prev = () => {
        carousel.current.slickPrev();
        tabsCarousel.current.slickPrev();
    };

    const handleChange = (id) => {
        carousel.current.slickGoTo(id);
        tabsCarousel.current.slickGoTo(id);
    };

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

    return (
        <section className="section services-switcher" id="services-switcher">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Our Services</p>
                        <div className="services-carousel-wrap">
                            <CarouselPagination
                                currentSlide={currentSlide}
                                totalSlides={totalSlides}
                            />
                            <Slider ref={carousel} className="services-carousel" {...settings}>
                                {
                                    data.map((service, key) => <ServiceSlide service={service} key={key} />)
                                }
                            </Slider>
                            <CarouselNav
                                onNext={next}
                                onPrev={prev}
                                currentSlide={currentSlide}
                                totalSlides={totalSlides}
                            />
                        </div>
                        <Slider ref={tabsCarousel} className="services-tabs" {...tabsSettings}>
                            {
                                data.map((service, key) => (
                                    <div className="services-tabs-item" key={key} onClick={() => handleChange(key)}>
                                        <ServicesTab service={service} id={key+1} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Switcher;