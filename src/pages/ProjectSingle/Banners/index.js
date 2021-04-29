import React from 'react';

const Banners = ({ data, baseUrl }) => {
    return (
        <section className="section project-page-banners">
            {
                data.map((banner, key) => (
                    <div className="project-page-banner" key={key}>
                        <img
                            src={baseUrl + banner.url}
                            alt={!!banner.alternativeText ? banner.alternativeText : banner.name}
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