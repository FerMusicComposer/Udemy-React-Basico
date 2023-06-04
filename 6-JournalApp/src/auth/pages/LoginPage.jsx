import React from 'react';
import { AuthLayout } from '../layout';
import { LoginForm } from '../components';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <LoginForm />
        </AuthLayout>
    );
};
