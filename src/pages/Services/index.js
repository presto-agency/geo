import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroInner from "components/HeroInner";
import Detail from "./Detail";
import Switcher from "./Switcher";
import DisciplinesAccordion from "./Disciplines";
import FootBanner  from "components/FootBanner";

import {isEmpty} from "utils/detectEmptyObject";
import {getServices} from "store/services/actions";

const ServicesPage = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.services);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getServices());
        }
    }, [dispatch, data]);

    return (
        <div className="page">
            <HeroInner title="Our Services" label="Main Expertise" toScroll="#services-switcher" />
            <Detail />
            <Switcher />
            <DisciplinesAccordion />
            <FootBanner src="https://images.unsplash.com/photo-1523192159590-edbd468b9518?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80" />
        </div>
    )
};

export default ServicesPage;