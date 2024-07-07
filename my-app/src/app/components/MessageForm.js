'use client';
import { useState } from 'react';
import { Button, TextField, Card, Typography } from '@mui/material';

const MessageForm = ({ onMessageSubmit }) => {
  const [content, setContent] = useState('');
  const [receiverId, setReceiverId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMessageSubmit({ content, receiverId });
    setContent('');
    setReceiverId('');
  };

  return (
    <Card component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Enviar Mensagem</Typography>
      <TextField
        required
        label="Conteúdo"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        required
        label="ID do Receptor"
        fullWidth
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <Button type="submit" fullWidth variant='contained'>
        Enviar
      </Button>
    </Card>
  );
};

export default MessageForm;
