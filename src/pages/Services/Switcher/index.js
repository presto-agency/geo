import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import CarouselNav from "components/CarouselNav";
import CarouselPagination from "components/CarouselPagination";
import {locoScroll} from "components/SmoothScroll";
import ServiceSlide from "./Slide";
import ServicesTabs from "./Tabs";

const Switcher = () => {

    const { data } = useSelector(state => state.services);
    const carousel = React.createRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(data.length);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 700,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        beforeChange: (index, nextIndex) => {
            setCurrentSlide(nextIndex + 1);
            locoScroll.scrollTo('#services-switcher', { duration: 10 });
        },
    };

    const next = () => {
        carousel.current.slickNext();
    };

    const prev = () => {
        carousel.current.slickPrev();
    };

    const handleChange = (id) => {
        carousel.current.slickGoTo(id);
    };

    return (
        <section className="section services-switcher" id="services-switcher">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label">Our Services</p>
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
                        <ServicesTabs services={data} onClick={handleChange} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Switcher;