import React from 'react';
import { createRoot } from 'react-dom/client';
import { JournalApp } from './JournalApp';
import { AppTheme } from './theme';
import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <AppTheme>
            <JournalApp />
        </AppTheme>
    </React.StrictMode>,
);
