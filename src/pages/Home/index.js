import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Hero from "./Hero";
import AboutDetail from "./About";
import Clients from "./Clients";
import Services from "./Services";
import FootBanner from "components/FootBanner";
import {isEmpty} from "utils/detectEmptyObject";
import {getHomePage} from "store/homePage/actions";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";

import logo from "assets/images/logo.png";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

import Disciplines from "./Disciplines";
import Videos from "./Videos";
import Contact from "./Contact";

// const Disciplines       = lazy(() => import("./Disciplines"));
// const Videos            = lazy(() => import("./Videos"));
// const Contact           = lazy(() => import("./Contact"));

const HomePage = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.homePage);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getHomePage());
        } else {
            locoScroll.update();
        }
    }, [dispatch]);

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office</title>
                <meta name="description" content="Global Engineering Office" />
                <meta property="og:title" content="Global Engineering Office" />
                <meta property="og:image" content={logo} />
            </MetaTags>
            <Hero />
            <AboutDetail data={data} />
            <Clients data={data.clientLogos || {}} />
            {/*<Suspense fallback={<Preloader />}>*/}
                <Disciplines />
            {/*</Suspense>*/}
            <Services />
            {/*<Suspense fallback={<Preloader />}>*/}
                <Videos />
            {/*</Suspense>*/}
            {/*<Suspense fallback={<Preloader />}>*/}
                <Contact />
            {/*</Suspense>*/}
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default HomePage;