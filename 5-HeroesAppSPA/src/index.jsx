import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HeroesAppSPA } from './HeroesAppSPA';

import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HeroesAppSPA />
        </BrowserRouter>
    </React.StrictMode>,
);
