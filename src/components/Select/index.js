import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import { customStyles } from './styles';

const CustomSelect = ({ options, callback, placeholder = 'Sort by' }) => {

    return (
        <Select
            styles={customStyles}
            defaultValue={{ label: placeholder }}
            onChange={(value) => callback(value)}
            options={options}
            className="select-custom"
        />
    )
};

export default CustomSelect;

CustomSelect.propTypes = {
    options: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};