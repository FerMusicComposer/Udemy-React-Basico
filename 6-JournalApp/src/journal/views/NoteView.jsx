import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { themePalette as tp } from '../../theme';

export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    June 6th, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button sx={{ color: 'secondary.dark', p: 2 }}>
                    <SaveOutlined
                        sx={{
                            fontSize: 30,
                            mr: 1,
                            color: tp.lightSecondaryDark,
                        }}
                    />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Give your note a title"
                    label="title"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder={`What's crackin'?`}
                    minRows={7}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    );
};
