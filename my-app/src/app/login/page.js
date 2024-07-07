'use client';
import { useState } from 'react';
import { Button, Typography, TextField, Container, Card } from '@mui/material';
import { authenticate } from '../util/api';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'; // Importação correta do useRouter
import styles from '../styles/Login.module.css'; // Importação dos estilos

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter(); // Utilização correta do useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authenticate(email, password);
      login(response.token); // Realiza o login com o token recebido
      router.push('/'); // Redireciona para a página inicial
    } catch (error) {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.container}>
      <Card component="form" onSubmit={handleSubmit} className={styles.card}>
        <Typography component='h1' variant="h5" className={styles.title}>
          Login
        </Typography>
        <TextField
          required
          label="Email"
          fullWidth
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <TextField
          required
          label="Senha"
          type="password"
          fullWidth
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {error && <Typography variant="body2" color="error" className={styles.error}>{error}</Typography>}
        <Button type="submit" fullWidth variant='contained' className={styles.button}>
          Login
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;
