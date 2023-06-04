import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { GoogleBtn } from './buttons';

export const LoginForm = () => {
    const labels = [
        { label: 'Email', type: 'email', placeholder: 'yourmail@mail.com' },
        { label: 'Password', type: 'password', placeholder: '' },
    ];
    const loginOptions = ['login', 'Google'];

    return (
        <form>
            <Grid container>
                {labels.map((label, i) => {
                    return (
                        <Grid item key={i} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label={label.label}
                                type={label.type}
                                placeholder={label.placeholder}
                                fullWidth
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                {loginOptions.map((option, i) => {
                    return (
                        <Grid item key={i} xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                {option === 'Google' ? <GoogleBtn /> : 'Login'}
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>

            <Grid container direction="row" justifyContent="end">
                <Link component={RouterLink} to="/auth/register">
                    Create Account
                </Link>
            </Grid>
        </form>
    );
};
