'use client'
import { Box, TextField, Typography, Button, Container } from "@mui/material"
import { useState } from "react"

function Login({ onSubmit }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ login, password });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                <Typography component='h1' variant="h5">
                    Login
                </Typography>
                <TextField
                    required
                    id="login"
                    label="Login"
                    fullWidth
                    variant="filled"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    sx={{ marginTop: 2}}
                />
                <Typography component='h1' variant="h5" sx={{ marginTop: 2 }}>
                    Senha
                </Typography>
                <TextField
                    id="password"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    required
                    fullWidth
                    variant="filled"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginTop: 2 }}
                />
                <Button
                    sx={{ marginTop: 4, backgroundColor:"gray" }}
                    type="submit"
                    fullWidth
                    variant='contained'
                    
                >
                    Entrar
                </Button>
            </Box>
        </Container>
    );
}

export default Login;
