import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from "react-meta-tags";

import HeroInner from "components/HeroInner";
import Detail from "./Detail";
import Switcher from "./Switcher";
import DisciplinesAccordion from "./Disciplines";
import FootBanner  from "components/FootBanner";
import {isEmpty} from "utils/detectEmptyObject";
import {getServicesPage} from "store/servicesPage/actions";
import footerBanner from 'assets/images/services/Caterpillar.jpg';

const ServicesPage = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.servicesPage);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getServicesPage());
            console.log('dispatch');
        }
    }, [dispatch]);

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | Our Services</title>
                <meta name="description" content="GEO is a firm of designers, engineers, planners and consultants providing a diverse range of professional services to clients around the middle-east. Our innovative and fully-integrated approach brings our full complement of skills and knowledge to bear on any given design problem. We exert a significant influence on the built environment and are the creative force behind many innovative and sustainable designs." />
                <meta property="og:title" content="Global Engineering Office | Our Services" />
                <meta property="og:image" content={footerBanner} />
            </MetaTags>
            <HeroInner title="Our Services" label="Main Expertise" toScroll="#services-switcher" />
            <Detail />
            <Switcher />
            <DisciplinesAccordion />
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default ServicesPage;