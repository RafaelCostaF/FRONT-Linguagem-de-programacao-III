'use client'
import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Posts = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} alignItems="flex-start">
          <ListItemText
            primary={<Typography variant="h6">{post.userId}</Typography>}
            secondary={<Typography variant="body1">{post.content}</Typography>}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Posts;
