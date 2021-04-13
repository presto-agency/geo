import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from "react-meta-tags";

import HeroInner from "components/HeroInner";
import FootBanner from "components/FootBanner";
import {getAboutPage} from "store/about/actions";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";
import {locoScroll} from "components/SmoothScroll";
import Detail from "./Detail";
import Team from "./Team";
import Testimonials from "./Testimonials";
import WhereWeWork from "./WhereWeWork";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

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
            <Detail data={data} />
            { !!data.team_members.length ? <Team data={data.team_members} /> : null }
            { !!data.testimonials.length ? <Testimonials data={data.testimonials} /> : null }
            <WhereWeWork />
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default AboutPage;