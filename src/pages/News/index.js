import React, { useEffect, useState } from 'react';
import MetaTags from "react-meta-tags";
import { useDispatch, useSelector } from 'react-redux';
import WithBaseUrl from "components/Hoc/withBaseUrl";

import {getNews} from "store/news/actions";
import Pagination from "react-js-pagination";
import paginationParams from "constants/paginationParams";
import {locoScroll} from "components/SmoothScroll";
import SplitTitle from "components/SplitTitle";

import NewsList from "./List";
import FilterSearch from "./Filters/Search";
import FilterCategories from "./Filters/Categories";
import FilterSort from "./Filters/Sort";

const NewsPage = ({ baseUrl }) => {

    const dispatch = useDispatch();
    const { data, totalCount, filters: { query, category, sort } } = useSelector((state) => state.news);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({
        query: '',
        category: '' || category,
        sort: 'ASC' || sort
    });

    useEffect(() => {
        dispatch(getNews({
            start: (( currentPage - 1 ) * paginationParams.limit ) || 0,
            currentPage,
            ...filter
        }));
    }, [currentPage, filter]);

    const handlePageChange = (a) => {
        setCurrentPage(a);
        locoScroll.scrollTo('#news-filters', {
            duration: 200,
            disableLerp: false,
        });
    };

    const handleFilterChange = (a) => {
        if(a.filter === 'category') {
            setFilter({
                ...filter,
                query: '',
                [a.filter]: a.value
            });
        } else {
            setFilter({
                ...filter,
                [a.filter]: a.value
            });
        }
        setCurrentPage(1);
    };

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | Our News</title>
                <meta name="description" content="GEO has four main global business areas – Buildings, Roads, Infrastructure and Urbanism – although our multi-disciplinary approach means that any given project may involve people from any or all of the sectors or regions in which we operate." />
                <meta property="og:title" content="Global Engineering Office | Our News" />
                <meta property="og:image" content={`${baseUrl}/uploads/View_md_8baab9885b.jpg`} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="GEO has four main global business areas – Buildings, Roads, Infrastructure and Urbanism – although our multi-disciplinary approach means that any given project may involve people from any or all of the sectors or regions in which we operate." />
            </MetaTags>
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">Our news</p>
                                <h1 className="h-1 hero-content-title split-text">
                                    <SplitTitle>News</SplitTitle>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section filters" id="news-filters">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filters-list fade">
                                <FilterSearch onSubmit={handleFilterChange} />
                                <FilterCategories onChange={handleFilterChange} defaultValue={filter.category} />
                                <FilterSort onChange={handleFilterChange} defaultValue={filter.sort} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section news">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <NewsList data={data} />
                            <hr className="hr"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
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
        </div>
    )
};

export default WithBaseUrl()(NewsPage);