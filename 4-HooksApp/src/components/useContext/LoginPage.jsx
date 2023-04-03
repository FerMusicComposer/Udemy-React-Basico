import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user);
    return (
        <div className="spaContent">
            <h1 className="spaContentHeader">Login</h1>

            <pre className="spaPre">{JSON.stringify(user, null, 3)}</pre>
            <button
                className="spaBtn"
                onClick={() => setUser({ id: 123, name: 'Trafalgar Law', email: 'trafalgar@email.com' })}
            >
                Set User
            </button>
        </div>
    );
};

export default LoginPage;
