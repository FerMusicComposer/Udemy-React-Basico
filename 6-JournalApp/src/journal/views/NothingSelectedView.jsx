import React from 'react';
import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';
import { themePalette as tp } from '../../theme';

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: tp.grey300 }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: 'primary.main' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ color: 'secondary.dark' }}>
                    Select or create a new entry
                </Typography>
            </Grid>
        </Grid>
    );
};
