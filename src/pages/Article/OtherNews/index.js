import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'components/Post'

const OtherNews = () => {

    const { data } = useSelector(state => state.news);

    return (
        <section className="section news-other">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="h-3">Oher news</h3>
                        <div className="news-list">
                            {
                                data.slice(0,2).map((post, key) => (
                                    <div className="news-list-box" key={key}>
                                        <Post post={post} />
                                    </div>
                                ))
                            }
                        </div>
                        <hr className="hr"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OtherNews;