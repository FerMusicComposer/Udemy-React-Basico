import React, { useEffect, useState } from 'react';

const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>User already exists</h3>
            {JSON.stringify(coords)}
        </>
    );
};

export default Message;
