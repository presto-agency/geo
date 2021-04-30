import React, { useEffect, useState } from 'react';
import MetaTags from "react-meta-tags";
import { useSelector, useDispatch } from 'react-redux';
import Pagination from "react-js-pagination";
import paginationParams from "constants/paginationParams";

import {getProjects} from "store/projects/actions";
import {loadMoreProjects} from "store/projects/actions";
import FootBanner from "components/FootBanner";
import {locoScroll} from "components/SmoothScroll";
import ProjectsSort from "./Sorting";
import ProjectsList from "./List";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const { data, totalCount, currentPage, filters: { category, location, sort } } = useSelector(state => state.projects);
    const [currPage, setCurrPage] = useState(currentPage || 1);
    const [filter, setFilter] = useState({
       category: '' || category,
       location: '' || location,
       sort: '' || sort
    });

    useEffect(() => {
        dispatch(getProjects({
            start: (( currPage - 1 ) * paginationParams.limit ) || 0,
            currPage,
            ...filter
        }));
    }, [currPage, filter]);

    const handlePageChange = (a) => {
        setCurrPage(a);
        locoScroll.scrollTo('#project-sort', {
            duration: 200,
            disableLerp: false,
        });
    };

    const handleFilterChange = (a) => {
        setFilter({
            ...filter,
            [a.filter]: a.value
        });
        setCurrPage(1);
    };

    const onLoadMore = () => {
        dispatch(loadMoreProjects({
            start: (currentPage * paginationParams.limit),
            currPage: currentPage + 1,
            ...filter
        }));
    };

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | Our Projects</title>
                <meta name="description" content="GEO has four main global business areas – Buildings, Roads, Infrastructure and Urbanism – although our multi-disciplinary approach means that any given project may involve people from any or all of the sectors or regions in which we operate." />
                <meta property="og:title" content="Global Engineering Office | Our Projects" />
                <meta property="og:image" content={footerBanner} />
            </MetaTags>
            <section className="section hero hero-inner projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProjectsSort onChange={handleFilterChange} defaultValues={filter} />
                            <ProjectsList data={data} />
                            <div className="pagination-load">
                                {
                                    Math.ceil(totalCount / paginationParams.limit) > 1
                                    ? (
                                        <Pagination
                                            activePage={currentPage}
                                            itemsCountPerPage={1}
                                            totalItemsCount={Math.ceil(totalCount / paginationParams.limit)}
                                            pageRangeDisplayed={5}
                                            onChange={handlePageChange}
                                            hideNavigation={true}
                                            hideFirstLastPages={true}
                                            hideDisabled={true}
                                        />
                                    ) : null
                                }
                                {
                                    currentPage < Math.ceil(totalCount / paginationParams.limit)
                                    ? <button className="link-btn" onClick={onLoadMore}>Load more projects</button>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ProjectPage;