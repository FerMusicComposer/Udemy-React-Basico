import React from 'react';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NothingSelectedView, NoteView } from '../views/';
import { AddOutlined } from '@mui/icons-material';

export const JournalHomePage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'secondary.main',
                    backgroundColor: 'primary.main',
                    ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
