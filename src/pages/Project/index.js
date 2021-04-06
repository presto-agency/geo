import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import routes from 'routes';
import {getProjects} from "store/projects/actions";
import FootBanner from "components/FootBanner";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";
import ProjectsSort from "./Sorting";
import ProjectsList from "./List";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const ProjectPage = ({ history, match: { params } }) => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.projects);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getProjects(params.pageNumber));
            setTimeout(() => {
                locoScroll.update();
            }, 500);
        }
    }, [dispatch]);

    const handlePageClick = ({ selected }) => {
        // dispatch(getProjects(selected));
        // history.push(`/project/page/${selected}`);
    };

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
                            <ReactPaginate
                                onPageChange={handlePageClick}
                                breakLabel={'...'}
                                pageCount={12}
                                // initialPage={params.pageNumber}
                                // disableInitialCallback={true}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                // hrefBuilder={(href) => {
                                //     return `page/${href}`
                                // }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ProjectPage;