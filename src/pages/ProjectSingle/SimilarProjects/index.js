import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getSimilarProjects} from "store/projects/actions";
import ProjectAccordion from "pages/Services/Disciplines/Project";

const SimilarProjects = ({ disciplineId, projectId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSimilarProjects({ disciplineId, projectId }));
    }, [dispatch]);

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="accordion-projects fade-on-scroll">
                            {/*{*/}
                            {/*    data.slice(0,2).map((project, key) => <ProjectAccordion project={project} key={key} />)*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SimilarProjects;