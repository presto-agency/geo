import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Hero from "./Hero";
import AboutDetail from "./About";
import {isEmpty} from "utils/detectEmptyObject";
import {getHomePage} from "store/homePage/actions";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";
import WithBaseUrl from "components/Hoc/withBaseUrl";

import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const Clients           = lazy(() => import("./Clients"));
const Disciplines       = lazy(() => import("./Disciplines"));
const Services          = lazy(() => import("./Services"));
const Videos            = lazy(() => import("./Videos"));
const Contact           = lazy(() => import("./Contact"));
const FootBanner        = lazy(() => import("components/FootBanner"));

const HomePage = ({ baseUrl }) => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.homePage);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getHomePage());
            setTimeout(() => {
                locoScroll.update();
            }, 1000);
        }
    }, [dispatch]);

    return (
        <div className="page">
            <MetaTags>
                <title>{data.title}</title>
                <meta name="description" content={data.leftDescription} />
                <meta property="og:title" content={data.title} />
                <meta property="og:image" content="http://164.90.162.188/uploads/Double_Tree_by_HILTON_Front_View_md_8aad79d9cb.jpg" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content={data.leftDescription} />
            </MetaTags>
            <Hero data={data} />
            <AboutDetail data={data} />
            <Suspense fallback={<Preloader />}>
                <Clients data={data.clientLogos || {}} />
                <Disciplines />
                <Services />
                <Videos />
                <Contact />
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default WithBaseUrl()(HomePage);