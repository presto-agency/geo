import React from 'react';
import Filters from "./Filters";
import NewsList from "./List";

const NewsPage = () => {
    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase">Our news</p>
                                <h1 className="h-1 hero-content-title">News </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Filters />
            <NewsList />
        </div>
    )
};

export default NewsPage;