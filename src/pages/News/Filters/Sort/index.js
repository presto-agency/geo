import React  from 'react';
import CustomSelect from "components/Select";

const sort = [
    {
        value: 'ASC',
        label: 'Date: from newest to oldest',
        filter: 'sort'
    },
    {
        value: 'DESC',
        label: 'Date: from oldest to newest',
        filter: 'sort'
    }
];

const FilterSort = ({ onChange, defaultValue }) => {

    const defaultSort = sort.filter(post => post.value === defaultValue);

    return (
        <div className="filters-list-sort">
            <CustomSelect
                options={sort}
                callback={onChange}
                defaultValue={defaultSort[0] || {label: 'Sort by'}}
            />
        </div>
    )
};

export default FilterSort;