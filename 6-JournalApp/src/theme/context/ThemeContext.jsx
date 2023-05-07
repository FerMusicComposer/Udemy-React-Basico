import React, { createContext, useContext, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../lightTheme';
import { darkTheme } from '../darkTheme';

export const ThemeModeContext = createContext({ toggleTheme: () => {}, mode: 'light' });

export const ToggleThemeMode = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
    };

    const themeContext = {
        toggleTheme,
        mode,
    };

    return (
        <ThemeModeContext.Provider value={themeContext}>
            {mode === 'light' ? (
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            ) : (
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            )}
        </ThemeModeContext.Provider>
    );
};

export const toggleThemeMode = () => {
    const context = useContext(ThemeModeContext);

    if (!context) throw new Error('No context defined for ThemeModeContext');
};
