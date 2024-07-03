// PostForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';

const PostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() !== '') {
      const newPost = {
        id: new Date().getTime(), // Gerando um ID único baseado no timestamp
        content: content,
        timestamp: new Date().toLocaleString(),
      };
      onPostSubmit(newPost);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="post-content"
        label="What's on your mind?"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!content.trim()}
      >
        Post
      </Button>
    </form>
  );
};

PostForm.propTypes = {
  onPostSubmit: PropTypes.func.isRequired,
};

export default PostForm;
