import React from 'react';
import FilterSearch from "./Search";
import FilterCategories from "./Categories";
import FilterSort from "./Sort";

const Filters = () => {
    return (
        <section className="section filters">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="filters-list">
                            <FilterSearch />
                            <FilterCategories />
                            <FilterSort />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Filters;