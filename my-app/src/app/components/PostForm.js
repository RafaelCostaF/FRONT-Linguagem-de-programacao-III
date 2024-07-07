'use client';
import { useState } from 'react';
import { Button, TextField, Card, Typography } from '@mui/material';

const PostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({ content, image });
    setContent('');
    setImage('');
  };

  return (
    <Card component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Criar Post</Typography>
      <TextField
        required
        label="No que você está pensando"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        label="Imagem (URL base64)"
        fullWidth
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit" fullWidth variant='contained'>
        Postar
      </Button>
    </Card>
  );
};

export default PostForm;
