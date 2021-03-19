import React from 'react';
import { useSelector } from 'react-redux';

import ProjectBody from "./ProjectBody";
import Banners from "./Banners";
import SomeDescription from "./SomeDescription";
import GoogleMap from "components/GoogleMap";
import SimilarProjects from "./SimilarProjects";
import FootBanner from "components/FootBanner";

const ProjectSinglePage = () => {

    const banners = [
        {
            url: 'https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1453284441168-8780c9f52097?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
    ];

    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <div className="project-tags fade">
                                    <p className="project-tag">Building</p>
                                    <p className="project-tag">Residential</p>
                                </div>
                                <h1 className="h-1 hero-content-title split-title">Park View</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectBody />
            <Banners data={banners} />
            <SomeDescription />
            <GoogleMap />
            {/*<SimilarProjects data={data} />*/}
            <FootBanner src="https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
        </div>
    )
};

export default ProjectSinglePage;