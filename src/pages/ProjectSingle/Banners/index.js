import React from 'react';

const _baseURL = process.env.REACT_APP_API_URL;

const Banners = ({ data }) => {
    return (
        <section className="section project-page-banners">
            {
                data.map((banner, key) => (
                    <div className="project-page-banner" key={key}>
                        <img
                            src={_baseURL + banner.url}
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