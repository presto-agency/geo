import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Preloader from "components/Preloader";

const ProjectsCarousel = lazy(() => import("components/ProjectsCarousel"));

const Videos = () => {

    const { data } = useSelector(state => state.videos);

    return (
        <section className="section projects">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <Suspense fallback={<Preloader />}>
                            <ProjectsCarousel data={data} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Videos;