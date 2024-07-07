'use client';
import { Card, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import styles from '../styles/PostList.module.css';

const PostList = ({ posts }) => {
  return (
    <List className={styles.list}>
      {posts.map((post) => (
        <ListItem key={post.id} className={styles.listItem}>
          <Card className={styles.card}>
            <Box className={styles.cardContent}>
              <Typography variant="body1" className={styles.content}>{post.content}</Typography>
              {post.image && <img src={post.image} alt="Post image" className={styles.image} />}
              <ListItemText secondary={new Date(post.createdAt).toLocaleString()} className={styles.timestamp} />
            </Box>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
