import React from 'react';
import { useSelector } from 'react-redux';
import Post from "components/Post";

const NewsList = () => {

    const { data } = useSelector(state => state.news);

    return (
        <section className="section news">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="news-list">
                            {
                                data.map((post, key) => (
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

export default NewsList;