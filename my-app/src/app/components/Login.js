'use client'
import { Box, TextField, Typography, Button, Container, Paper, Card } from "@mui/material"
import { useState } from "react"

function Login({ onSubmit }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ login, password });
    };

    return (
        <Container 
            component="main" 
            maxWidth="xs" 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '100vh' 
            }}
        >
            <Card
                elevation={3}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    width: '100%',
                    borderRadius: '20px'
                }}
            >
                <Typography sx={{marginTop: 2, fontSize: 20}}>
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
                    sx={{ marginTop: 2 }}
                />
                <Typography component='h1' variant="h5" sx={{ fontSize: 20, marginTop: 2 }}>
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
                    sx={{ marginTop: 4}}
                    type="submit"
                    fullWidth
                    variant='contained'
                >
                    Entrar
                </Button>
            </Card>
        </Container>
    );
}

export default Login;
