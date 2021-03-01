import React from 'react';
import MetaTags from 'react-meta-tags';
import ArticleBody from "./ArticleBody";
import OtherNews from "./OtherNews";
import banner from 'assets/images/contact-us.jpg';

const ArticlePage = () => {
    return (
        <div className="page">
            <MetaTags>
                <title>Enter our festive giveaways</title>
                <meta name="description" content="This December we are giving you the chance to win a signed copy of Portfolio or The Flying Gherkin children’s activity pack. Decide where The Flying Gherkin should visit next. Submit your drawing of The Flying Gherkin at its next destination to win a festive Flying Gherkin activity pack." />
                <meta property="og:title" content="Enter our festive giveaways" />
                <meta property="og:image" content={banner} />
            </MetaTags>
            <section className="section hero hero-inner __default">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-content">
                                <p className="label label-uppercase fade">Evens</p>
                                <h1 className="h-2 hero-content-title split-title">Enter our festive giveaways</h1>
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