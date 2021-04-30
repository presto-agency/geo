import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getDisciplines} from "store/disciplines/actions";

import Preloader from "components/Preloader";
import {isEmpty} from "utils/detectEmptyObject";
import {locoScroll} from "components/SmoothScroll";

const Services = () => {

    const dispatch = useDispatch();
    const disciplines = useSelector(state => state.disciplines.data);

    useEffect(() => {
        //get disciplines
        if(isEmpty(disciplines)) {
            dispatch(getDisciplines());
        } else {
            locoScroll.update();
        }
    }, [disciplines]);

    if(isEmpty(disciplines)){
        return <Preloader />
    }

    const average = Math.ceil(disciplines.length / 2);

    return (
        <section className="section services"
             data-scroll={true}
             data-scroll-id="home-services"
             data-scroll-repeat="true"
             data-scroll-call="services-moving"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Disciplines</p>
                    </div>
                </div>
            </div>
            <div className="services-list">
                <div
                    className="list-scroll horizontal-moving"
                    data-scroll={true}
                    data-scroll-speed="2"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    {
                        disciplines.slice(0, average).map((item, key) => <p className="services-list-item h-3" key={key}>{item.name}</p>)
                    }
                </div>
            </div>
            <div className="services-list __reverse">
                <div
                    className="list-scroll horizontal-moving"
                    data-scroll={true}
                    data-scroll-speed="1.5"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    {
                        disciplines.slice(average, disciplines.length).map((item, key) => <p className="services-list-item h-3" key={key}>{item.name}</p>)
                    }
                </div>
            </div>
        </section>
    )
};

export default Services;