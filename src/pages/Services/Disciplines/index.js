import React  from 'react';

import list from './list';

import DisciplineSingleAccordion from "./AccordionItem";

const DisciplinesAccordion = () => {

    return (
        <section className="section disciplines-accordion">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Main Expertise</p>
                        <div className="disciplines-accordion-box">
                            {
                                list.slice(0, 10).map((item, key) => <DisciplineSingleAccordion item={item} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DisciplinesAccordion;