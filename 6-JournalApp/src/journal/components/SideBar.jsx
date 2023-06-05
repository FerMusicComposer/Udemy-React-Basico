import React from 'react';
import {
    Box,
    Drawer,
    Toolbar,
    Grid,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { themePalette as tp } from '../../theme';

const months = ['January', 'February', 'March', 'April', 'May', 'June'];

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },

                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6">Fernando S.</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {months.map((month, i) => {
                        return (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot color="primary" />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={month} />
                                        <ListItemText secondary={'Lorem Ipsum dolor est'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </Box>
    );
};
