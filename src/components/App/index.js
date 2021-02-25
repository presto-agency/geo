import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import SmoothScroll from "components/SmoothScroll";
import routes from 'routes';
import HomePage from "pages/Home";
import AboutPage from "pages/About";
import ServicesPage from "pages/Services";
import ProjectPage from "pages/Project";
import NewsPage from "pages/News";
import ContactPage from "pages/Contact";
import SearchPage from "pages/Search";
import ProjectSinglePage from "pages/ProjectSingle";
import ArticlePage from "pages/Article";
import PageNotFound from "pages/404";
import Header from "components/Header";
import Footer from "components/Footer";
import {routeIn, routeOut} from "utils/routeTransition";

const App = () => {

    return (
        <Router>
            <SmoothScroll>
                <Header />
                <Route
                    render={({ location }) => {
                        const { pathname, key } = location;
                        return (
                            <TransitionGroup component={null}>
                                <Transition
                                    key={key}
                                    appear={true}
                                    onEnter={(node, appears) => routeIn(pathname, node, appears)}
                                    onExit={(node, appears) => routeOut(node, appears)}
                                    timeout={{ enter: 1500, exit: 1000 }}
                                >
                                    <div className="transition-box">
                                    <Switch location={location}>
                                        <Route path={routes.index} exact component={HomePage} />
                                        <Route path={routes.about} component={AboutPage} />
                                        <Route path={routes.services} component={ServicesPage} />
                                        <Route path={routes.project.detail} component={ProjectSinglePage} />
                                        <Route path={routes.project.index} exact component={ProjectPage} />
                                        <Route path={routes.news.article} component={ArticlePage} />
                                        <Route path={routes.news.index} exact component={NewsPage} />
                                        <Route path={routes.contact} component={ContactPage} />
                                        <Route path={routes.search} component={SearchPage} />
                                        <Route path="*" component={PageNotFound} />
                                    </Switch>
                                    <Footer />
                                    </div>
                                </Transition>
                            </TransitionGroup>
                        )
                    }}
                />
            </SmoothScroll>
        </Router>
    );
};

export default App;
