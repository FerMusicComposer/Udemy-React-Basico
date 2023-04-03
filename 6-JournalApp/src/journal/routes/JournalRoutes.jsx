import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalHomePage } from '../pages';

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<JournalHomePage />} />

            {/* Redirect */}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
