import React from 'react';
import { useSelector } from 'react-redux';

import ProjectsList from "pages/Project/List";
import {isEmpty} from "utils/detectEmptyObject";
import FootBanner from "components/FootBanner";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const SearchResultPage = ({ location: { params } }) => {

    const result = useSelector((state) => state.projects.selected.data);

    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 offset-xl-1">
                            <div className="hero-content">
                                <p className="fade">{
                                    !!result.length
                                        ? `${result.length} search results for:`
                                        : '0 search results'}
                                </p>
                                <h6 className="h-6 fade">{ params }</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {
                                !isEmpty(result)
                                ? <ProjectsList data={result} />
                                : null
                            }
                        </div>
                    </div>
                </div>
            </section>
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default SearchResultPage;