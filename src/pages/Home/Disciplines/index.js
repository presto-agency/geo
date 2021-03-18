import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'

import routes from 'routes';

import DetectCarouselType from "./detectCarouselType";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";

const _baseURL = process.env.REACT_APP_API_URL;

const Disciplines = ({ data }) => {

    const carouselStyles = {
        height: window.innerHeight
    };
    const wSize = {
        width: '100%',
        height: window.innerHeight
    };

    useEffect(() => {
        if(!isEmpty(data)){
            locoScroll.update();
        }
    }, [data]);

    if(isEmpty(data)){
       return <Preloader />
    }

    return (
        <section
            className="section disciplines"
            id="disciplines"
            data-scroll={true}
            data-scroll-id="home-disciplines"
            data-scroll-repeat="true"
            data-scroll-call="disciplines-moving"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-1 col-lg-8">
                        <DetectCarouselType data={data} >
                            {
                                data.map((box, key) => (
                                    <div
                                        className="disciplines-box"
                                        key={key}
                                        data-scroll={true}
                                        data-scroll-speed="4"
                                        data-scroll-position="center"
                                        data-scroll-direction="vertical"
                                    >
                                        <div className="disciplines-box-preview">
                                            <img src={_baseURL + box.serviceMedia.url} alt={box.name} />
                                        </div>
                                        <p className="label">Main Expertise</p>
                                        <p className="disciplines-box-title h-2 split-content">{box.name}</p>
                                        <p className="disciplines-box-description">{box.description}</p>
                                        <Link to={routes.services} className="link-btn">Our services</Link>
                                    </div>
                                ))
                            }
                        </DetectCarouselType>
                    </div>
                </div>
            </div>
            {
                window.innerWidth > 991
                ? (
                    <div className="disciplines-carousel">
                        <div className="disciplines-carousel-list">
                            {
                                data.slice(0).reverse().map((box, key) => (
                                    <div className="disciplines-carousel-slide" key={key} style={carouselStyles}>
                                        <Wave
                                            className="wave"
                                            fill={`url(#image-${key})`}
                                            paused={false}
                                            options={{
                                                height: ( wSize.height - 50 ),
                                                width: wSize.width,
                                                amplitude: 15,
                                                speed: 0.55,
                                                points: 9
                                            }}>
                                            <pattern
                                                id={`image-${key}`}
                                                width={wSize.width}
                                                height={wSize.height}
                                                patternUnits="userSpaceOnUse">
                                                <image
                                                    href={_baseURL + box.serviceMedia.url}
                                                    // width={wSize.width}
                                                    height={wSize.height}
                                                    className="image-slide"
                                                />
                                            </pattern>
                                        </Wave>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </section>
    )
};

export default Disciplines;