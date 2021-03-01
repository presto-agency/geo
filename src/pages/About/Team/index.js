import React from 'react';
import list from './list';

const Team = () => {
    return (
        <section
            className="section team"
            id="team"
            data-scroll={true}
            data-scroll-id="group-parallax"
            data-scroll-repeat="false"
            data-scroll-call="group-parallax"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Our Team</p>
                        <div className="team-list">
                            {
                                list.map((person, key) => (
                                    <div className="team-list-box" key={key}>
                                        <div className="person">
                                            <div className="person-photo">
                                                <img
                                                    src={person.preview}
                                                    alt={person.name}
                                                    className="group-scale"
                                                />
                                            </div>
                                            <div className="group-fade">
                                                <p className="person-name h-6">{person.name}</p>
                                                <p className="person-position">{person.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Team;