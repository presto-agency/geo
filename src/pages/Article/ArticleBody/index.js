import React from 'react';
import FollowLink from "components/FollowLink";

const ArticleBody = () => {
    return (
        <section className="section article">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="article-banner scale">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80"
                                alt=""
                                data-scroll={true}
                                data-scroll-speed="-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2">
                        <p
                            className="article-date"
                            data-scroll={true}
                            data-scroll-sticky={true}
                            data-scroll-target="#article-body"
                        >Jan 15, 2020</p>
                    </div>
                    <div className="col-xl-8">
                        <div id="article-body">
                            <div className="article-description">
                                <h4 className="h-4">This December we are giving you the chance to win a signed copy of Portfolio or The Flying Gherkin children’s activity pack. Decide where The Flying Gherkin should visit next. Submit your drawing of The Flying Gherkin at its next destination to win a festive Flying Gherkin activity pack.</h4>
                            </div>
                            <div className="article-body">
                                <p>Foster + Partners architects and engineers have developed a radical new plan to build a temporary double-decker crossing within the existing structure of Hammersmith Bridge in London, which has been closed fully on safety grounds since 13 August this year. he proposal which has been presented to the Hammersmith & Fulham Council envisages pedestrians, cyclists and, potentially, motor vehicles being able to use the bridge during its repair and restoration. A new raised truss structure would be built above the existing road deck, featuring a lower level for pedestrians and cyclists and an upper level for cars and buses.</p>
                                <p>The raised deck would enable existing approach routes for traffic to be used, causing minimum disruption for residents on both banks of the river. The structure will also provide support for the bridge as well as a safe platform for restoration work to be carried out. The new truss structure would be assembled in two halves and launched from each side over the existing road surface. It will be supported on each bank and at the two existing piers. As a result, there will be no added load on the existing bridge deck. Elements of the Grade 2* listed bridge that need repair, including pedestals, anchors and chains, would be lifted away and transported by barges to an off-site facility for safe repair and restoration. Contractors would use the new lower pedestrian deck to access the works. When completed, the temporary raised deck would be removed.</p>
                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80" alt=""/>
                                <p>By repairing the bridge off-site, the huge task of restoration can be done at greater speed, to a higher level and at significantly reduced cost. It would also minimise noise, environmental impact and onsite activity, as well as reducing the all-important carbon footprint of the works. The proposal has been further advanced working in partnership with bridge engineers COWI who have a particular expertise in the refurbishment of existing structures.</p>
                                <p>Luke Fox, Senior Executive Partner at Foster + Partners said “We are excited to propose this simple solution to what is an important missing piece of London’s infrastructure that also gives the opportunity to bring back to life a beautiful and iconic bridge by Sir Joseph Bazalgette” Roger Ridsdill Smith, head of Structural Engineering at Foster + Partners said “We believe that our concept resolves the two challenges for Hammersmith Bridge economically and efficiently: delivering a temporary crossing quickly, whilst providing a safe support to access and refurbish the existing bridge.</p>
                                <p>“We appreciate the engagement and contribution from the technical experts and committees in charge of the bridge and look forward to further studies to develop the scheme” David MacKenzie – Executive Director at COWI said “We consider that this approach is practical and viable. Our experience is that offsite refurbishment of bridge structures is safer and more controlled, and results in a higher quality final outcome when the structure is re-installed.”</p>
                            </div>
                            <div className="article-action">
                                <div className="article-action-nav">
                                    <FollowLink title="Next news" to="/news/1" />
                                </div>
                                <div className="article-action-social">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ArticleBody;