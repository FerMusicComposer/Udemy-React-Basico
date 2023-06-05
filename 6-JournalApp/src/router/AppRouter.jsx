import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthRouter, AuthRoutes } from '../auth/routes';
import { JournalRouter, JournalRoutes } from '../journal/routes';
import { ErrorPage } from '../utils/ErrorPage';

const routesConfig = createBrowserRouter([
    {
        path: 'auth/*',
        element: <AuthRouter />,
        children: AuthRoutes,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <JournalRouter />,
        children: JournalRoutes,
        errorElement: <ErrorPage />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};
