import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterSearch = ({ onSubmit }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let query = {
            value,
            filter: 'query'
        };
        if(!!value) {
            onSubmit(query);
            setValue('');
        }
    };

    return (
        <div className="filters-list-search">
            <form className="news-search" onSubmit={handleSubmit}>
                <div className="input-container">
                    <button className="input-search-btn" />
                    <input
                        type="text"
                        className="input search-news"
                        placeholder="Search"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )
};

export default FilterSearch;

FilterSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired
};