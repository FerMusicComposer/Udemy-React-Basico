import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { GoogleBtn } from './buttons';

export const RegisterForm = () => {
    const labels = [
        { label: 'Full Name', type: 'name', placeholder: 'John Doe' },
        { label: 'Email', type: 'email', placeholder: 'yourmail@mail.com' },
        { label: 'Password', type: 'password', placeholder: 'create a strong password!!!' },
    ];

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
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                        Create Account
                    </Button>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}>Already registered?</Typography>
                <Link component={RouterLink} to="/auth/login">
                    Login
                </Link>
            </Grid>
        </form>
    );
};
