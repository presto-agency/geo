import React from 'react';
import ArticleBody from "./ArticleBody";
import OtherNews from "./OtherNews";

const ArticlePage = () => {
    return (
        <div className="page">
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <p className="label label-uppercase">Evens</p>
                                <h1 className="h-2 hero-content-title">Enter our festive giveaways</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ArticleBody />
            <OtherNews />
        </div>
    )
};

export default ArticlePage;