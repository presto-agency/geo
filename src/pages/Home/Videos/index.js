import React from 'react';
import { useSelector } from 'react-redux';

import ProjectsCarousel from "components/ProjectsCarousel";

const Videos = () => {

    const { data } = useSelector(state => state.videos);

    return (
        <section className="section projects">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <ProjectsCarousel data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Videos;