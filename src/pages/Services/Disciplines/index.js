import React from 'react';

import DisciplineSingleAccordion from "./AccordionItem";
import Preloader from "components/Preloader";

const DisciplinesAccordion = ({ data }) => {

    if(!data.length) {
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
                                data.map((item, key) => <DisciplineSingleAccordion item={item} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DisciplinesAccordion;