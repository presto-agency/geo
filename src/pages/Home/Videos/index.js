import React from 'react';

import ProjectsCarousel from "components/ProjectsCarousel";

const Videos = ({ data }) => {

    return (
        <section className="section projects">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        { !!data.length ? <ProjectsCarousel data={data} /> : null }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Videos;