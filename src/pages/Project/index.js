import React from 'react';
import ProjectsSort from "./Sorting";
import ProjectsList from "./List";
import FootBanner from "../../components/FootBanner";

const ProjectPage = () => {
    return (
        <div className="page">
            <section className="section hero hero-inner projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProjectsSort/>
                            <ProjectsList />
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src="https://images.unsplash.com/photo-1519760370-4a5c4dc9a17a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" />
        </div>
    )
};

export default ProjectPage;