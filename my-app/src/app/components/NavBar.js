import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Link href="/" passHref>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/login" passHref>
                    <Button color="inherit">Login</Button>
                </Link>
                <Link href="/signup" passHref>
                    <Button color="inherit">Signup</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
