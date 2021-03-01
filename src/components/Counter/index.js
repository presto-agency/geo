import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Counter = ({ value, isVisible }) => {

    const [val, setVal] = useState(0);

    useEffect(() => {
        isVisible ? setVal(parseInt(value)) : setVal(0);
    }, [isVisible]);

    return <CountUp start={0} end={val} duration={3} />

};

export default Counter;