import React from 'react';
import { AuthLayout } from '../layout';
import { RegisterForm } from '../components';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <RegisterForm />
        </AuthLayout>
    );
};
