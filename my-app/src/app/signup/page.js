'use client';
import { useState } from 'react';
import { Button, Typography, TextField, Container, Card } from '@mui/material';
import { register } from '../util/api';
import { useRouter } from 'next/navigation';
import styles from '../styles/Signup.module.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password, fullName });
      router.push('/login');
    } catch (error) {
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.container}>
      <Card component="form" onSubmit={handleSubmit} className={styles.card}>
        <Typography component='h1' variant="h5" className={styles.title}>
          Cadastro
        </Typography>
        <TextField
          required
          label="Nome Completo"
          fullWidth
          variant="filled"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.input}
        />
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
          Cadastrar
        </Button>
      </Card>
    </Container>
  );
};

export default SignupPage;
