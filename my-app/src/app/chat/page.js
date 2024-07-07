'use client'
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { sendMessage, getMessages } from '../util/api';

const Chat = ({ userId, friendId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        try {
            const messagesData = await getMessages(userId, friendId);
            setMessages(messagesData);
        } catch (error) {
            console.error('Erro ao buscar mensagens:', error);
        }
    };

    const handleSendMessage = async () => {
        try {
            await sendMessage({ userId, friendId, content: message });
            fetchMessages();
            setMessage('');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

    useState(() => {
        fetchMessages();
    }, []);

    return (
        <div>
            <List>
                {messages.map((msg) => (
                    <ListItem key={msg.id}>
                        <ListItemText primary={msg.content} secondary={msg.timestamp} />
                    </ListItem>
                ))}
            </List>
            <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem"
            />
            <Button onClick={handleSendMessage} variant="contained" color="primary">
                Enviar
            </Button>
        </div>
    );
};

export default Chat;
