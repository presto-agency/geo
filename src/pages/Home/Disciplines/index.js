import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'
import routes from 'routes';
import list from './list';

const Disciplines = () => {

    const carouselStyles = {
      height: (window.innerHeight - 100)
    };
    const wSize = {
        width: '100%',
        height: (window.innerHeight - 100)
    };

    return (
        <section className="section disciplines" id="disciplines">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-1">
                        {
                            list.map((box, key) => (
                                <div className="disciplines-box" key={key}>
                                    <div className="disciplines-box-preview">
                                        <img src="" alt={box.title} />
                                    </div>
                                    <p className="label">Main Expertise</p>
                                    <p className="disciplines-box-title h-2">{box.title}</p>
                                    <p className="disciplines-box-description">{box.description}</p>
                                    <Link to={routes.services} className="link-btn">Our services</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div
                className="disciplines-carousel"
                data-scroll={true}
                data-scroll-sticky={true}
                data-scroll-target="#disciplines"
                style={carouselStyles}
            >
                <div className="disciplines-carousel-list"
                    // data-scroll={true}
                    // data-scroll-speed="3"
                    // data-scroll-position="top"
                    // data-scroll-direction="vertical"
                    >
                    {
                        list.map((box, key) => (
                            <div
                                className="disciplines-carousel-slide"
                                key={key}
                                style={carouselStyles}
                            >
                                <Wave
                                    fill={`url(#image-${key})`}
                                    paused={false}
                                    options={{
                                        height: ( wSize.height - 100 ),
                                        width: wSize.width,
                                        amplitude: 12,
                                        speed: 0.55,
                                        points: 8
                                    }}
                                >
                                    <defs>
                                        <pattern
                                            id={`image-${key}`}
                                            width={wSize.width}
                                            height={wSize.height}
                                            patternUnits="userSpaceOnUse">
                                            <image
                                                href={box.preview}
                                                width={wSize.width}
                                                height={wSize.height}
                                            />
                                        </pattern>
                                    </defs>
                                </Wave>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Disciplines;