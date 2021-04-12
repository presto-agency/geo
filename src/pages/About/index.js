import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
            <HeroInner title={data.title} label={data.subTitle} toScroll="#about-detail-values" />
            <Detail data={data} />
            { !!data.team_members.length ? <Team data={data.team_members} /> : null }
            { !!data.testimonials.length ? <Testimonials data={data.testimonials} /> : null }
            <WhereWeWork />
            <FootBanner src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80" />
        </div>
    )
};

export default AboutPage;