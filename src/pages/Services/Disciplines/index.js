import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DisciplineSingleAccordion from "./AccordionItem";
import {getHomePage} from "store/homePage/actions";
import Preloader from "components/Preloader";

const DisciplinesAccordion = () => {

    const dispatch = useDispatch();
    const { data: { disciplines } } = useSelector((state) => state.homePage);

    useEffect(() => {
        if(!disciplines) {
            dispatch(getHomePage());
        }
    }, [dispatch]);

    if(!disciplines) {
        return <Preloader />
    }

    return (
        <section className="section disciplines-accordion">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Main Expertise</p>
                        <div className="disciplines-accordion-box">
                            {
                                disciplines.slice(0, 10).map((item, key) => <DisciplineSingleAccordion item={item} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DisciplinesAccordion;