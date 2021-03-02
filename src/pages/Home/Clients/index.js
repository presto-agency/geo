import React from 'react';
import client1 from 'assets/images/clients/client-1.png'
import client2 from 'assets/images/clients/client-2.png'
import client3 from 'assets/images/clients/client-3.png'
import client4 from 'assets/images/clients/client-4.png'
import client5 from 'assets/images/clients/client-5.png'

const Clients = () => {
    return (
        <section className="section clients">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <p className="label fade-on-scroll">Trusted by</p>
                    </div>
                </div>
            </div>
            <div className="clients-overlay">
                <div
                    className="clients-list horizontal-moving"
                    data-scroll={true}
                    data-scroll-speed="5"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    <div className="clients-list-item">
                        <img src={client1} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client2} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client3} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client4} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client5} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client1} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client2} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client3} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client4} alt="" />
                    </div>
                    <div className="clients-list-item">
                        <img src={client5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Clients