'use client';
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <Card>
            <Typography variant="body1">{post.content}</Typography>
            {post.image && <img src={post.image} alt="Post image" />}
            <ListItemText secondary={new Date(post.createdAt).toLocaleString()} />
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
