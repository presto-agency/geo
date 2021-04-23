import React, { useEffect, lazy, Suspense } from 'react';
import MetaTags from "react-meta-tags";
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from "components/GoogleMap";

import Banners from "./Banners";
import SomeDescription from "./SomeDescription";
import {getSingleProject} from "store/projects/actions";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import SplitTitle from "components/SplitTitle";
import SimilarProjects from "./SimilarProjects";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const ProjectBody           = lazy(() => import("./ProjectBody"));
const FootBanner            = lazy(() => import("components/FootBanner"));

const _baseURL = process.env.REACT_APP_API_URL;

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
            <MetaTags>
                <title>Global Engineering Office | {data.name}</title>
                <meta name="description" content={data.description} />
                <meta property="og:title" content={`Global Engineering Office | ${data.name}`} />
                {
                    !!data.topImage
                    ? <meta property="og:image" content={_baseURL + data.topImage.formats.small.url} />
                    : <meta property="og:image" content={footerBanner} />
                }
            </MetaTags>
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <div className="project-tags fade">
                                    {
                                        data.project_categories.map((category, key) => (
                                            <p className="project-tag" key={key}>{category.name}</p>
                                        ))
                                    }
                                    {/*{!!data.country ? <p className="project-tag" >{data.country}</p> : null }*/}
                                    {/*{!!data.city ? <p className="project-tag" >{data.city}</p> : null }*/}
                                </div>
                                <h1 className="h-1 hero-content-title split-text">
                                    <SplitTitle>{data.name}</SplitTitle>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Suspense fallback={<Preloader />}>
                <ProjectBody data={data} />
            </Suspense>
            <Banners data={data.additionalImages} />
            {!!data.discipline ? <SomeDescription data={data.discipline} /> : null}
            {!!data.countryData ? <GoogleMap data={data.countryData} /> : null }
            {!!data.discipline ? <SimilarProjects disciplineId={data.discipline.id} projectId={data.id} /> : null}
            <Suspense fallback={<Preloader />}>
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default ProjectSinglePage;