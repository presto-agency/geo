import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import SmoothScroll from "components/SmoothScroll";
import SwitchWrapper from "routes/Switch";

import Header from "components/Header";
import Footer from "components/Footer";
import Modal from "components/Modal";

import {routeIn, routeOut} from "utils/routeTransition";

const App = () => {
    return (
        <Router>
            <Fragment>
                <SmoothScroll>
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
                                            <Header />
                                            <SwitchWrapper />
                                            <Footer />
                                        </div>
                                    </Transition>
                                </TransitionGroup>
                            )
                        }} />
                </SmoothScroll>
                <Modal />
            </Fragment>
        </Router>
    );
};

export default App;
