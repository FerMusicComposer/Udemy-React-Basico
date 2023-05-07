import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeModeContext } from '../../theme';

export const JournalHomePage = () => {
    const context = useContext(ThemeModeContext);
    return (
        <>
            <h1>JournalHomePage</h1>
            <IconButton
                sx={context.mode === 'light' ? { mr: 1, color: '#000' } : { mr: 1, color: '#FFFd' }}
                onClick={() => context.toggleTheme()}
            >
                {context.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </>
    );
};
