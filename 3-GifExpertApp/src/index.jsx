import React from 'react';
import * as ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>,
);
