import React from 'react';
import HeroInner from "components/HeroInner";
import Detail from "./Detail";
import Team from "./Team";
import Testimonials from "./Testimonials";
import FootBanner from "components/FootBanner";
import WhereWeWork from "./WhereWeWork";


const AboutPage = () => {
    return (
        <div className="page">
            <HeroInner title="About Us" label="who we are" />
            <Detail/>
            <Team />
            <Testimonials />
            <WhereWeWork />
            <FootBanner src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80" />
        </div>
    )
};

export default AboutPage;