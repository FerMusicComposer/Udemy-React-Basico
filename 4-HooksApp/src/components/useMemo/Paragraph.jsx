import React from 'react';

const Paragraph = React.memo(({ value }) => {
    console.log('I just rerendered');
    return <p>{value}</p>;
});

export default Paragraph;
