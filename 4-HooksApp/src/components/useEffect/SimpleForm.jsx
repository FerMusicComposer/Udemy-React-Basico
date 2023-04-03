import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onSubmit = () => {
        console.log(formState);
    };

    return (
        <div className="item3">
            <h3>Simple Form</h3>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <br />
            <input
                type="email"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <hr />
            <button onClick={onSubmit}>Submit</button>
            {username === 'Ferdniken337' && <Message />}
        </div>
    );
};

export default SimpleForm;
