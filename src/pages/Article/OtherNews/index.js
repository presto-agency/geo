import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from 'components/Post'
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {getSimilarNews} from "store/news/actions";

const OtherNews = ({ data: { category, id } }) => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.news.similar);

    useEffect(() => {
        dispatch(getSimilarNews({ category, id }));
    }, [dispatch]);

    if(isEmpty(data)) {
        return <Preloader />
    }

    return (
        <section className="section news-other">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="h-3 fade-on-scroll">Other news</h3>
                        <div className="news-list">
                            {
                                data.slice(0,2).map((post, key) => (
                                    <div className="news-list-box" key={key}>
                                        <Post post={post} />
                                    </div>
                                ))
                            }
                        </div>
                        <hr className="hr fade-on-scroll"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OtherNews;