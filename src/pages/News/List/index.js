import React from 'react';

import Post from "components/Post";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";

const NewsList = ({ data }) => {

    if(isEmpty(data)){
        return <Preloader />
    }

    if(!data.length) {
        return <p>Nothing found</p>
    }

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