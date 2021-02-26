import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';

const CounterAnimate = ({ value }) => {

    const [val, setVal] = useState(null);

    useEffect(() => {
        setVal(value)
    }, []);

    return <Odometer value={val} format="d" duration={400} />
};

export default CounterAnimate;