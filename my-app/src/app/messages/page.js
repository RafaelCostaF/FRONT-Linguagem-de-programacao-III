'use client';
import { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import { getAllMessages, createMessage } from '../util/api';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

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
    <Container>
      <Typography variant="h4">Mensagens</Typography>
      <MessageForm onMessageSubmit={handleMessageSubmit} />
      <MessageList messages={messages} />
    </Container>
  );
};

export default MessagesPage;
