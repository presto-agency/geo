import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from "react-meta-tags";

import HeroInner from "components/HeroInner";
import {getAboutPage} from "store/about/actions";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";
import Team from "./Team";
import Testimonials from "./Testimonials";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const Detail                = lazy(() => import("./Detail"));
const WhereWeWork           = lazy(() => import("./WhereWeWork"));
const FootBanner            = lazy(() => import("components/FootBanner"));

const AboutPage = () => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.about);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getAboutPage());
            setTimeout(() => {
                locoScroll.update();
            }, 1000);
        }
    }, [dispatch]);

    if(loading || isEmpty(data)) {
        return <Preloader />
    }

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | About Us</title>
                <meta name="description" content="Our firm has competent staff working in offices in the United Arab Emirates and Lebanon. At any one time, we have many projects running concurrently." />
                <meta property="og:title" content="Global Engineering Office | About Us" />
                <meta property="og:image" content={footerBanner} />
            </MetaTags>
            <HeroInner title={data.title} label={data.subTitle} toScroll="#about-detail-values" />
            <Suspense fallback={<Preloader />}>
                <Detail data={data} />
            </Suspense>
            { !!data.team_members.length ? <Team data={data.team_members} /> : null }
            { !!data.testimonials.length ? <Testimonials data={data.testimonials} /> : null }
            <Suspense fallback={<Preloader />}>
                <WhereWeWork />
                <FootBanner src={footerBanner} />
            </Suspense>
        </div>
    )
};

export default AboutPage;