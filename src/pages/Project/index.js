import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getProjects} from "store/projects/actions";
import FootBanner from "components/FootBanner";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";
import ProjectsSort from "./Sorting";
import ProjectsList from "./List";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.projects);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getProjects());
        }
        if(!isEmpty(data)){
            locoScroll.update();
        }
    }, [data]);

    if(loading || isEmpty(data)){
        return <Preloader />
    }

    return (
        <div className="page">
            <section className="section hero hero-inner projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProjectsSort/>
                            <ProjectsList data={data} />
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ProjectPage;