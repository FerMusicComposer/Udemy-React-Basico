import React from 'react';
import { Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const GoogleBtn = () => {
    return (
        <>
            <Google />
            <Typography sx={{ ml: 1 }}>Google</Typography>
        </>
    );
};
