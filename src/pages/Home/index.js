import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from 'react-meta-tags';

import Hero from "./Hero";
import AboutDetail from "./About";
import Clients from "./Clients";
import Disciplines from "./Disciplines";
import Services from "./Services";
import Videos from "./Videos";
import Contact from "./Contact";
import FootBanner from "components/FootBanner";

import {getServices} from "store/services/actions";
import {getDisciplines} from "store/disciplines/actions";
import {isEmpty} from "utils/detectEmptyObject";
import logo from "assets/images/logo.png";
import footerBanner from 'assets/images/home/Sport_Academy.jpg';

const HomePage = () => {

    const dispatch = useDispatch();
    const services = useSelector(state => state.services.data);
    const disciplines = useSelector(state => state.disciplines.data);

    useEffect(() => {
        //get services
        if(isEmpty(services)) {
            dispatch(getServices());
        }
        //get disciplines
        if(isEmpty(disciplines)) {
            dispatch(getDisciplines());
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
            <AboutDetail />
            <Clients />
            <Disciplines data={services} />
            <Services data={disciplines} />
            <Videos />
            <Contact />
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default HomePage;