import React  from 'react';
import { useSelector } from 'react-redux';

import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";

import DisciplineSingleAccordion from "./AccordionItem";

const DisciplinesAccordion = () => {

    const { data } = useSelector(state => state.disciplines);

    if(isEmpty(data)) {
        return <Preloader />
    }

    return (
        <section className="section disciplines-accordion">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Disciplines</p>
                        <div className="disciplines-accordion-box">
                            {
                                data.slice(0, 10).map((discipline, key) => <DisciplineSingleAccordion discipline={discipline} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DisciplinesAccordion;