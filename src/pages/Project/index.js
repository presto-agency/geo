import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from "react-js-pagination";
import paginationParams from "constants/paginationParams";

import {getProjects} from "store/projects/actions";
import FootBanner from "components/FootBanner";
import {locoScroll} from "components/SmoothScroll";
import ProjectsSort from "./Sorting";
import ProjectsList from "./List";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const ProjectPage = () => {

    const dispatch = useDispatch();
    const { data, totalCount, filters: { category, location, sort } } = useSelector(state => state.projects);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({
       category: '' || category,
       location: '' || location,
       sort: '' || sort
    });

    useEffect(() => {
        dispatch(getProjects({
            start: (( currentPage - 1 ) * paginationParams.limit ) || 0,
            currentPage,
            ...filter
        }));
        // setTimeout(() => {
        //     locoScroll.update();
        // }, 1000);
    }, [currentPage, filter]);

    const handlePageChange = (a) => {
        setCurrentPage(a);
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
        setCurrentPage(1);
    };

    return (
        <div className="page">
            <section className="section hero hero-inner projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProjectsSort onChange={handleFilterChange} defaultValues={filter} />
                            <ProjectsList data={data} />
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
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ProjectPage;