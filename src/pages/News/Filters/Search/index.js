import React from 'react';

const FilterSearch = () => {
    return (
        <div className="filters-list-search">
            <div className="news-search">
                <div className="input-container">
                    <button className="input-search-btn" />
                    <input type="text" className="input search-news" placeholder="Search" />
                </div>
            </div>
        </div>
    )
};

export default FilterSearch;