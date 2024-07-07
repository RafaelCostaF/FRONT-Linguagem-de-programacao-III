'use client';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

const NavBar = () => {
  const { token, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Minha Rede Social
        </Typography>
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/posts">
          Posts
        </Button>
        <Button color="inherit" component={Link} href="/messages">
          Mensagens
        </Button>
        <Button color="inherit" component={Link} href="/friends">Friends</Button>
        <Button color="inherit" component={Link} href="/groups">Groups</Button>
        <Button color="inherit" component={Link} href="/events">Events</Button>
        {!token ? (
          <>
            <Button color="inherit" component={Link} href="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} href="/signup">
              Cadastro
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
