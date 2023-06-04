import React, { useContext } from 'react';
import { IconButton, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeModeContext } from '../../theme';
import { Link } from 'react-router-dom';

export const JournalHomePage = () => {
    const context = useContext(ThemeModeContext);
    return (
        <>
            <Typography variant="h1">JournalHomePage</Typography>
            <IconButton
                sx={context.mode === 'light' ? { mr: 1, color: '#000' } : { mr: 1, color: '#FFFd' }}
                onClick={() => context.toggleTheme()}
            >
                {context.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>

            <Link to="auth/login">
                <button>login</button>
            </Link>
        </>
    );
};
