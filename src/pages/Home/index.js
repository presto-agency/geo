import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Hero from "./Hero";
import AboutDetail from "./About";
import Clients from "./Clients";
import Services from "./Services";
import Contact from "./Contact";
import {isEmpty} from "utils/detectEmptyObject";
import {getHomePage} from "store/homePage/actions";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";

import logo from "assets/images/logo.png";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const Disciplines       = lazy(() => import("./Disciplines"));
const Videos            = lazy(() => import("./Videos"));
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
            <Clients data={data.clientLogos || {}} />
            <Suspense fallback={<Preloader />}>
                <Disciplines />
            </Suspense>
            <Services />
            <Suspense fallback={<Preloader />}>
                <Videos />
            </Suspense>
            <Contact />
            <Suspense fallback={<Preloader />}>
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default HomePage;