'use client';
import { useState, useEffect } from 'react';
import { Typography, Container, Box, Card } from '@mui/material';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import { getAllMessages, createMessage } from '../util/api';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from '../styles/Messages.module.css';
import NavBar from '../components/NavBar';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      fetchMessages();
    }
  }, [token, router]);

  const fetchMessages = async () => {
    try {
      const messagesData = await getAllMessages(token);
      setMessages(messagesData);
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  const handleMessageSubmit = async (newMessage) => {
    try {
      const createdMessage = await createMessage(newMessage, token);
      setMessages([createdMessage, ...messages]);
    } catch (error) {
      console.error('Erro ao criar mensagem:', error);
    }
  };

  return (
    <Container maxWidth="md" className={styles.container}>
        <NavBar/>
      <Typography variant="h4" className={styles.title}>Mensagens</Typography>
      <Box className={styles.messageSection}>
        <MessageForm onMessageSubmit={handleMessageSubmit} />
        <MessageList messages={messages} />
      </Box>
    </Container>
  );
};

export default MessagesPage;
