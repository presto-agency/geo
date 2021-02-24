import React  from 'react';
import DisciplineSingleAccordion from "./AccordionItem";
import list from './list';

const DisciplinesAccordion = () => {

    return (
        <section className="section disciplines-accordion">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label">Disciplines</p>
                        <div className="disciplines-accordion-box">
                            {
                                list.map((discipline, key) => <DisciplineSingleAccordion discipline={discipline} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DisciplinesAccordion;