import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from 'react-meta-tags';

import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import SplitTitle from "components/SplitTitle";
import ArticleBody from "./ArticleBody";
import OtherNews from "./OtherNews";
import {getSingleArticle} from "store/news/actions";

const _baseURL = process.env.REACT_APP_API_URL;

const ArticlePage = ({ match }) => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.news.singleArticle);
    const nextArticle = useSelector((state) => state.news.nextArticle);

    useEffect(() => {
        dispatch(getSingleArticle(match.params.id));
    }, [dispatch]);

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | {data.title}</title>
                <meta name="description" content={data.description} />
                <meta property="og:title" content={`Global Engineering Office | ${data.title}`} />
                <meta property="og:image" content={_baseURL + data.topImage.formats.medium.url} />
            </MetaTags>
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">{data.category}</p>
                                <SplitTitle>
                                    <h1 className="h-2 hero-content-title split-title">{data.title}</h1>
                                </SplitTitle>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ArticleBody data={data} nextArticle={nextArticle} />
            <OtherNews data={data} />
        </div>
    )
};

export default ArticlePage;