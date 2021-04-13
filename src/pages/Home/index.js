import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Hero from "./Hero";
import AboutDetail from "./About";
import {isEmpty} from "utils/detectEmptyObject";
import {getHomePage} from "store/homePage/actions";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";

import logo from "assets/images/logo.png";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const Clients           = lazy(() => import("./Clients"));
const Disciplines       = lazy(() => import("./Disciplines"));
const Services          = lazy(() => import("./Services"));
// const Videos            = lazy(() => import("./Videos"));
const Contact           = lazy(() => import("./Contact"));
const FootBanner        = lazy(() => import("components/FootBanner"));

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
                <meta name="description" content="GEO is a firm of Architects, Designers, Engineers, Planners and Consultants providing a diverse range of professional services to clients around the Middle-East." />
                <meta property="og:title" content="Global Engineering Office" />
                <meta property="og:image" content={logo} />
            </MetaTags>
            <Hero />
            <AboutDetail data={data} />
            <Suspense fallback={<Preloader />}>
                <Clients data={data.clientLogos || {}} />
                <Disciplines />
                <Services />
                {/*<Videos />*/}
                <Contact />
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default HomePage;