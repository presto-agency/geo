import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from "components/GoogleMap";
import WithBaseUrl from "components/Hoc/withBaseUrl";
import routes from 'routes';

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

const ProjectSinglePage = ({ match, baseUrl }) => {

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
                    ? <meta property="og:image" content={baseUrl + data.topImage.formats.small.url} />
                    : <meta property="og:image" content={`${baseUrl}/uploads/View_md_8baab9885b.jpg`} />
                }
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content={data.description} />
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
            <Banners data={data.additionalImages} baseUrl={baseUrl} />
            {!!data.discipline ? <SomeDescription data={data.discipline} /> : null}
            {!!data.countryData ? <GoogleMap data={data.countryData} /> : null }
            <div className="back">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <Link to={routes.project.index} className="link-back">
                                <svg width="26" height="15" viewBox="0 0 26 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.13081 15L8.28893 13.8418L3.13531 8.68816L26 8.68816L26 7.05023L3.13531 7.05024L8.28892 1.89662L7.1308 0.738447L-6.2339e-07 7.86925L7.13081 15Z" />
                                </svg>
                                back to projects page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {!!data.discipline ? <SimilarProjects disciplineId={data.discipline.id} projectId={data.id} /> : null}
            <Suspense fallback={<Preloader />}>
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default WithBaseUrl()(ProjectSinglePage);