import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, MarvelPage, HeroPage, SearchPage } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="search" element={<SearchPage />} />

                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    );
};
