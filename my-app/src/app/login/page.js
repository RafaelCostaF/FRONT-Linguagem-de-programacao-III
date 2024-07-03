'use client'
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Card } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from '../styles/Login.module.css';
import { login } from '../util/api'; // Importa a função login do arquivo utils/api.js

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Enviando dados para login:', { email, password }); // Verifica os dados sendo enviados
            const loginResponse = await login(email, password);
            console.log('Usuário autenticado:', loginResponse);
            router.push('/'); // Redireciona para a página inicial após o login bem-sucedido
        } catch (error) {
            console.error('Erro no login:', error);
            setError('Erro ao fazer login. Verifique os dados e tente novamente.');
        }
    };

    return (
        <Container 
            component="main" 
            maxWidth="xs" 
            className={styles.container}
        >
            <Card
                elevation={3}
                component="form"
                onSubmit={handleSubmit}
                className={styles.card}
            >
                <Typography component='h1' variant="h5" className={styles.title}>
                    Login
                </Typography>
                {error && <Typography color="error" className={styles.error}>{error}</Typography>}
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="filled"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
                <TextField
                    required
                    id="password"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    variant="filled"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant='contained'
                    className={styles.submitButton}
                >
                    Entrar
                </Button>
            </Card>
        </Container>
    );
}

export default Login;
