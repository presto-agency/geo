import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getNews} from "store/news/actions";

import Filters from "./Filters";
import NewsList from "./List";

const NewsPage = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(getNews({
            start: 0
        }));
    }, [dispatch]);

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
            <Filters />
            <NewsList data={data} />
        </div>
    )
};

export default NewsPage;