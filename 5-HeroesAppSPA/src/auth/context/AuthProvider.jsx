import React, { useReducer } from 'react';
import { encodeString } from '../../ui/helpers';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = {
    logged: false,
};

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user,
    };
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {
        const user = {
            id: name + 123,
            name,
        };

        const action = {
            type: types.login,
            payload: user,
        };

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        const action = {
            type: types.logout,
        };

        localStorage.removeItem('user');
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>
            {children}
        </AuthContext.Provider>
    );
};
