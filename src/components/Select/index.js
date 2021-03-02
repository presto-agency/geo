import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import { customStyles } from './styles';

const CustomSelect = ({ options, callback, placeholder = 'Sort by' }) => {

    const [focused, setFocused] = useState(false);

    return (
        <Select
            styles={customStyles}
            defaultValue={{ label: placeholder }}
            onChange={(value) => callback(value)}
            options={options}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`select-custom ${focused ? 'focused': ''}`}
        />
    )
};

export default CustomSelect;

CustomSelect.propTypes = {
    options: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};