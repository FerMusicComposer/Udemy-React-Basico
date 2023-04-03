import React from 'react';
import { useForm } from '../../hooks';

const SimpleFormWithCustomHook = () => {
    const { username, email, password, onInputChange, onResetForm, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        console.log({ username, email, password });
    };

    return (
        <div className="item4">
            <h3>Simple Form With Custom Hook</h3>
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
            <br />
            <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <hr />
            <button className="btn" onClick={event => onSubmit(event, handleSubmit)}>
                Submit
            </button>
            <button className="btn" onClick={onResetForm}>
                Reset Form
            </button>
        </div>
    );
};

export default SimpleFormWithCustomHook;
