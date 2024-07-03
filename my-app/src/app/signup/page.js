'use client'
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Card } from '@mui/material';

function Signup({ onSignup }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email,
            password
        };
        onSignup(newUser);
        setName('');
        setEmail('');
        setPassword('');
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
                <Typography component='h1' variant="h5" sx={{marginTop: 2, fontSize: 20}}>
                    Cadastro
                </Typography>
                <TextField
                    required
                    id="name"
                    label="Nome"
                    fullWidth
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginTop: 2 }}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="filled"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginTop: 2 }}
                />
                <TextField
                    required
                    id="password"
                    label="Senha"
                    type="password"
                    autoComplete="new-password"
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
                    Cadastrar
                </Button>
            </Card>
        </Container>
    );
}

export default Signup;
