import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeModeContext } from '../../theme';

export const NavBar = ({ drawerWidth = 240 }) => {
    const context = useContext(ThemeModeContext);

    return (
        <AppBar
            position="fixed"
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
            <Toolbar>
                <IconButton color="secondary" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component="div" sx={{ ml: 1 }}>
                        Journal App
                    </Typography>

                    <Grid item justifyContent="space-around">
                        <IconButton
                            sx={
                                context.mode === 'light'
                                    ? { mr: 1, color: '#000' }
                                    : { mr: 1, color: '#FFFd' }
                            }
                            onClick={() => context.toggleTheme()}
                        >
                            {context.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>

                        <Link to="auth/login">
                            <button>login</button>
                        </Link>
                        <IconButton color="secondary">
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
