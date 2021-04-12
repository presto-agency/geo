import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';
import monthNames from 'constants/monthNames';
import FollowLink from "components/FollowLink";
import {isEmpty} from "utils/detectEmptyObject";
import Sharing from "../Sharing";

const _baseURL = process.env.REACT_APP_API_URL;

const ArticleBody = ({ data, nextArticle }) => {

    const createdDate = new Date(data.createdAt);
    const month = monthNames[createdDate.getMonth()].abbreviation;
    const day = createdDate.getDate();
    const year = createdDate.getFullYear();

    return (
        <section className="section article">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="article-banner scale">
                            <div
                                className="article-banner-box"
                                data-scroll={true}
                                data-scroll-speed="-2"
                            >
                                <img
                                    src={!!data.topImage ? _baseURL + data.topImage.url : 'https://via.placeholder.com/300/?text=GEO article'}
                                    alt={data.title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2 col-lg-2">
                        <p
                            className="article-date fade-on-scroll"
                            data-scroll={true}
                            data-scroll-sticky={true}
                            data-scroll-target="#article-body"
                        >{month} {day < 9 ? '0' + day : day}, {year}</p>
                    </div>
                    <div className="col-xl-8 col-lg-10">
                        <div id="article-body">
                            <div className="article-description fade-on-scroll">
                                <h4 className="h-4">{data.description}</h4>
                            </div>
                            <div className="article-body fade-on-scroll" dangerouslySetInnerHTML={{ __html: data.body }} />
                            <div className="article-action fade-on-scroll">
                                <div className="article-action-nav">
                                {
                                    !isEmpty(nextArticle.data)
                                    ? (
                                        <FollowLink title="Next news" to={`${routes.news.index}/${nextArticle.data.id}`} />
                                    ) : null
                                }
                                </div>
                                <div className="article-action-social">
                                    <Sharing data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ArticleBody;

ArticleBody.propTypes = {
    data: PropTypes.object,
    nextArticle: PropTypes.object
};