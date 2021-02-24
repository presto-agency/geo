import React from 'react';
import { useSelector } from 'react-redux';
import ProjectsCarousel from "components/ProjectsCarousel";

const Projects = () => {

    const { data } = useSelector(state => state.projects);

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

export default Projects;