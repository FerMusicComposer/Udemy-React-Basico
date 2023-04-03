import React from 'react';
import * as ReactDOM from 'react-dom/client';
import HooksApp from './HooksApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HooksApp />
    </React.StrictMode>,
);
