import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getNews} from "store/news/actions";
import Pagination from "react-js-pagination";
import paginationParams from "constants/paginationParams";
import {locoScroll} from "components/SmoothScroll";

import NewsList from "./List";
import FilterSearch from "./Filters/Search";
import FilterCategories from "./Filters/Categories";
import FilterSort from "./Filters/Sort";

const NewsPage = () => {

    const dispatch = useDispatch();
    const { data, totalCount, filters: { query, category, sort } } = useSelector((state) => state.news);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({
        query: '',
        category: '' || category,
        sort: '' || sort
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
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">Our news</p>
                                <h1 className="h-1 hero-content-title split-title">News </h1>
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

export default NewsPage;