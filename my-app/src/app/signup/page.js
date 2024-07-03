'use client'
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Card } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from '../styles/Signup.module.css';
import { signup } from '../util/api'; // Importa a função signup do arquivo utils/api.js

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Enviando dados para cadastro:', { fullName, email, password }); // Verifica os dados sendo enviados
            const newUser = await signup(email, password, fullName);
            console.log('Usuário cadastrado:', newUser);
            router.push('/'); // Redireciona para a página inicial após o cadastro bem-sucedido
        } catch (error) {
            console.error('Erro no cadastro:', error);
            setError('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
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
                    Cadastro
                </Typography>
                {error && <Typography color="error" className={styles.error}>{error}</Typography>}
                <TextField
                    required
                    id="fullName"
                    label="Nome Completo"
                    fullWidth
                    variant="filled"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={styles.input}
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
                    className={styles.input}
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
                    className={styles.input}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant='contained'
                    className={styles.submitButton}
                >
                    Cadastrar
                </Button>
            </Card>
        </Container>
    );
}

export default Signup;
