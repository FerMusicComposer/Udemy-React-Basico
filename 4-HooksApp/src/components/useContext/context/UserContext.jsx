import React, { createContext, useState } from 'react';

export const UserContext = createContext();

// const user = {
//     id: 1347,
//     name: 'Fernando Salamanca',
//     email: 'trafalgar@email.com',
// };

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return <UserContext.Provider value={{ user: user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
