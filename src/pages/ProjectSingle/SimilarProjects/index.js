import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getSimilarProjects} from "store/projects/actions";
import ProjectAccordion from "pages/Services/Disciplines/Project";
import {isEmpty} from "utils/detectEmptyObject";
import Preloader from "components/Preloader";

const SimilarProjects = ({ disciplineId, projectId }) => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.projects.similar);

    useEffect(() => {
        dispatch(getSimilarProjects({ disciplineId, projectId }));
    }, [dispatch]);

    if(isEmpty(data)) {
        return <Preloader />
    }

    return (
        <section className="section similar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="accordion-projects">
                            {
                                data.slice(0,2).map((project, key) => <ProjectAccordion project={project} key={key} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SimilarProjects;