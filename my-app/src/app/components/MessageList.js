'use client';
import { Card, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import styles from '../styles/MessageList.module.css';

const MessageList = ({ messages }) => {
  return (
    <List className={styles.list}>
      {messages.map((message) => (
        <ListItem key={message.id} className={styles.listItem}>
          <Card className={styles.card}>
            <Box className={styles.cardContent}>
              <Typography variant="body1" className={styles.content}>{message.content}</Typography>
              <ListItemText secondary={new Date(message.sentAt).toLocaleString()} className={styles.timestamp} />
            </Box>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
