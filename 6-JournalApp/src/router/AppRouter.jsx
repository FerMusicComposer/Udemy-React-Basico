import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { JournalRoutes } from '../journal/routes';
import { LoginPage, RegisterPage } from '../auth/pages';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Login && Register */}
                <Route path="/auth/*" element={<AuthRoutes />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>

                {/* JournalApp */}
                <Route path="/*" element={<JournalRoutes />} />
            </Routes>
        </>
    );
};
