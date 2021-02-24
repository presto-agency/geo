import React  from 'react';
import CustomSelect from "components/Select";

const options = [
    {
        value: 'date_asc',
        label: 'Date: from newest to oldest'
    },
    {
        value: 'date_desc',
        label: 'Date: from oldest to newest'
    },
    {
        value: 'size_asc',
        label: 'Size: from largest to smallest'
    },
    {
        value: 'size_desc',
        label: 'Size: from smallest to largest'
    }
];

const FilterSort = () => {

    const onChange = (value) => {
      console.log('news sort - ', value);
    };

    return (
        <div className="filters-list-sort">
            <CustomSelect
                options={options}
                callback={onChange}
                placeholder="Sort by"
            />
        </div>
    )
};

export default FilterSort;