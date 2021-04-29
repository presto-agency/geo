import React from 'react';
import WithBaseUrl from "components/Hoc/withBaseUrl";
import locationIcon from 'assets/images/icons/location.svg';
import clientIcon from 'assets/images/icons/client.svg';
import squareIcon from 'assets/images/icons/square.svg';
import factsIcon from 'assets/images/icons/facts.svg';
import areaIcon from 'assets/images/icons/area.svg';
import ProjectPageCarousel from "./Carousel";
import {numberWithCommas} from "utils/numberWithCommas";

const ProjectBody = ({ data, baseUrl }) => {

    return (
        <section className="section project-page">
            {
                !!data.topImage
                ? (
                    <div className="project-page-banner scale">
                        <div
                            className="banner-box"
                            data-scroll={true}
                            data-scroll-speed="-2"
                        >
                            <img
                                src={baseUrl + data.topImage.url}
                                alt={data.name}
                            />
                        </div>
                    </div>
                    )
                : null
            }
            <div className="project-page-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h3 className="h-3 fade-on-scroll">Key facts</h3>
                            <hr className="hr"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="project-facts">
                                {
                                    !!data.city
                                    ? (
                                        <div className="project-facts-item fade-on-scroll">
                                            <div className="project-fact-icon">
                                                <img src={locationIcon} alt="Location" />
                                            </div>
                                            <p className="label-uppercase">Location</p>
                                            <p className="project-fact-value">{data.city}</p>
                                        </div>
                                        )
                                    : null
                                }
                                {
                                    !!data.keyFacts.client
                                    ? (
                                        <div className="project-facts-item fade-on-scroll">
                                            <div className="project-fact-icon">
                                                <img src={clientIcon} alt="Client" />
                                            </div>
                                            <p className="label-uppercase">Client</p>
                                            <p className="project-fact-value">{data.client}</p>
                                        </div>
                                        )
                                    : null
                                }
                                {
                                    !!data.bua
                                    ? (
                                        <div className="project-facts-item fade-on-scroll">
                                            <div className="project-fact-icon">
                                                <img src={squareIcon} alt="BUA" />
                                            </div>
                                            <p className="label-uppercase">BUA</p>
                                            <p className="project-fact-value">{numberWithCommas(data.bua)} m<sup>2</sup></p>
                                        </div>
                                        )
                                    : null
                                }
                                {
                                    !!data.keyFacts.length
                                    ? (
                                        <div className="project-facts-item fade-on-scroll">
                                            <div className="project-fact-icon">
                                                <img src={factsIcon} alt="Key facts" />
                                            </div>
                                            <p className="label-uppercase">Key facts</p>
                                            <ul className="project-fact-value">
                                                {
                                                    data.keyFacts.map(fact => (
                                                        !!fact.Item ? <li key={fact.id}>{fact.Item}</li> : null
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        )
                                    : null
                                }
                                {
                                    !!data.plotArea
                                    ? (
                                        <div className="project-facts-item fade-on-scroll">
                                            <div className="project-fact-icon">
                                                <img src={areaIcon} alt="Plot area" />
                                            </div>
                                            <p className="label-uppercase">Plot area</p>
                                            <p className="project-fact-value">{numberWithCommas(data.plotArea)} m<sup>2</sup></p>
                                        </div>
                                        )
                                    : null
                                }
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="project-fact-description fade-on-scroll">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        {
                            !!data.sliderMedia.length || data.youtubeVideoLink
                            ? <ProjectPageCarousel
                                    data={data}
                                    video={data.youtubeVideoLink}
                                    baseUrl={baseUrl} />
                            : null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WithBaseUrl()(ProjectBody);