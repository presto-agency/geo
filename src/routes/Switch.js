import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes';

import HomePage from "pages/Home";
import AboutPage from "pages/About";
import ServicesPage from "pages/Services";
import ProjectPage from "pages/Project";
import NewsPage from "pages/News";
import ContactPage from "pages/Contact";
import ProjectSinglePage from "pages/ProjectSingle";
import ArticlePage from "pages/Article";
import SearchResultPage from "pages/SearchResult";
import PageNotFound from "pages/404";

const SwitchWrapper = () => {
    return (
        <Switch>
            <Route path={routes.index} exact component={HomePage} />
            <Route path={routes.about} component={AboutPage} />
            <Route path={routes.services} component={ServicesPage} />
            <Route path={routes.project.detail} exact component={ProjectSinglePage} />
            <Route path={[routes.project.index, routes.project.pages]} exact component={ProjectPage} />
            <Route path={routes.news.article} exact component={ArticlePage} />
            <Route path={routes.news.index} exact component={NewsPage} />
            <Route path={routes.contact} component={ContactPage} />
            <Route path={routes.searchResult} component={SearchResultPage} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
};

export default SwitchWrapper;