import React from 'react';
import { ToggleThemeMode } from './context/ThemeContext';

export const AppTheme = ({ children }) => {
    return <ToggleThemeMode>{children}</ToggleThemeMode>;
};
