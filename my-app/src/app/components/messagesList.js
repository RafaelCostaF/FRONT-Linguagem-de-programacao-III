'use client';
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';

const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message) => (
        <ListItem key={message.id}>
          <Card>
            <Typography variant="body1">{message.content}</Typography>
            <ListItemText secondary={new Date(message.sentAt).toLocaleString()} />
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
