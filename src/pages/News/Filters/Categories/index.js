import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FilterCategories = ({ onChange, defaultValue }) => {

    const [categories, setCategories] = useState([
        {
            value: '',
            label: 'All',
            filter: 'category',
            checked: true
        },
        {
            value: 'EVENTS',
            label: 'Events',
            filter: 'category',
            checked: false
        },
        {
            value: 'PRESS',
            label: 'Press',
            filter: 'category',
            checked: false
        },
        {
            value: 'WORK',
            label: 'Work',
            filter: 'category',
            checked: false
        },
    ]);

    useEffect(() => {
        setCategories(
            categories.map(option => option.value === defaultValue
                ? { ...option, checked: true }
                : { ...option, checked: false })
        );
    }, [defaultValue]);

    const handleChange = (event) => {
        setCategories(
            categories.map(option => option.value === event.target.value
            ? { ...option, checked: event.target.checked }
            : { ...option, checked: false })
        );
        const checkedCategory = categories.filter(category => category.value === event.target.value);
        onChange(checkedCategory[0]);
    };

    return (
        <div className="filters-list-categories">
            <div className="news-categories">
                {
                    categories.map((category, key) => (
                        <label className="input-container-check link" key={key}>
                            <input
                                type="radio"
                                name={category.filter}
                                value={category.value}
                                checked={category.checked}
                                onChange={handleChange}
                                className="input-check"
                            />
                            <div className="input-check-title">{category.label}</div>
                        </label>
                    ))
                }
            </div>
        </div>
    )
};

export default FilterCategories;

FilterCategories.propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string
};