import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from "components/GoogleMap";

import ProjectBody from "./ProjectBody";
import Banners from "./Banners";
import SomeDescription from "./SomeDescription";
import FootBanner from "components/FootBanner";
import {getSingleProject} from "store/projects/actions";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import SplitTitle from "components/SplitTitle";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

import SimilarProjects from "./SimilarProjects";

const ProjectSinglePage = ({ match }) => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.projects.singleProject);

    useEffect(() => {
        dispatch(getSingleProject(match.params.id));
    }, [dispatch]);

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <div className="project-tags fade">
                                    {!!data.country ? <p className="project-tag" >{data.country}</p> : null }
                                    {!!data.city ? <p className="project-tag" >{data.city}</p> : null }
                                </div>
                                <SplitTitle>
                                    <h1 className="h-1 hero-content-title split-title">{data.name}</h1>
                                </SplitTitle>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectBody data={data} />
            <Banners data={data.additionalImages} />
            {!!data.discipline ? <SomeDescription data={data.discipline} /> : null}
            <GoogleMap />
            {!!data.discipline ? <SimilarProjects disciplineId={data.discipline.id} projectId={data.id} /> : null}
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ProjectSinglePage;