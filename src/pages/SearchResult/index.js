import React from 'react';
import { useSelector } from 'react-redux';

const SearchResultPage = () => {

    const result = useSelector((state) => state.projects.selected.data);

    console.log(result);

    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">Projects</p>
                                <h1 className="h-1 hero-content-title split-title">Search result</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default SearchResultPage;