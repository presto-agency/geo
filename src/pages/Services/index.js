import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from "react-meta-tags";
import WithBaseUrl from "components/Hoc/withBaseUrl";

import HeroInner from "components/HeroInner";
import Switcher from "./Switcher";
import DisciplinesAccordion from "./Disciplines";
import FootBanner  from "components/FootBanner";
import {isEmpty} from "utils/detectEmptyObject";
import {getServicesPage} from "store/servicesPage/actions";
import footerBanner from 'assets/images/services/Caterpillar.jpg';

const ServicesPage = ({ baseUrl }) => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.servicesPage);

    useEffect(() => {
        if(isEmpty(data)) {
            dispatch(getServicesPage());
        }
    }, [dispatch]);

    return (
        <div className="page">
            <MetaTags>
                <title>Global Engineering Office | {data.title}</title>
                <meta name="description" content={data.descritpion} />
                <meta property="og:title" content={`Global Engineering Office | ${data.title}`} />
                <meta property="og:image" content={`${baseUrl}/uploads/Double_Tree_by_HILTON_Front_View_md_8aad79d9cb.jpg`} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content={data.description} />
            </MetaTags>
            <HeroInner title={data.title || ''} label={data.subTitle || ''} toScroll="#services-switcher" />
            <section className="section detail">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 offset-xl-1">
                            <div className="fade">
                                <h4 className="h-4">{data.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
            <DisciplinesAccordion data={data.disciplines || []} />
            <FootBanner src={footerBanner} />
        </div>
    )
};

export default WithBaseUrl()(ServicesPage);