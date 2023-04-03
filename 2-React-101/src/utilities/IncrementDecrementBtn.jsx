import React from 'react';
import PropTypes from 'prop-types';

const IncrementDecrementBtn = ({ operand, setCount }) => {
    return <button onClick={setCount}>{operand === 'add' ? '+1' : '-1'}</button>;
};

IncrementDecrementBtn.propTypes = {
    operand: PropTypes.string.isRequired,
    setCount: PropTypes.func.isRequired,
};

export default IncrementDecrementBtn;
