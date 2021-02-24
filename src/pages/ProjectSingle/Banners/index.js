import React from 'react';

const Banners = ({ data }) => {
    return (
        <section className="section project-page-banners">
            {
                data.map((banner, key) => (
                    <div className="project-page-banner" key={key}>
                        <img
                            src={banner.url}
                            alt=""
                            data-scroll={true}
                            data-scroll-speed="-2"
                            data-scroll-position="center"
                        />
                    </div>
                ))
            }
        </section>
    )
};

export default Banners;