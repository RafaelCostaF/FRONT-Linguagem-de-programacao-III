// 'use client';
// import React, { useState, useEffect, useContext } from 'react';
// import { Container, TextField, Button, Typography, Card } from '@mui/material';
// import styles from '../styles/Chat.module.css';
// import { AuthContext } from '../context/AuthContext';
// import { chatMessages } from '../utils/chatData';

// function Chat() {
//     const { user } = useContext(AuthContext);
//     const [messages, setMessages] = useState(chatMessages);
//     const [newMessage, setNewMessage] = useState('');

//     const handleSendMessage = (event) => {
//         event.preventDefault();
//         if (newMessage.trim() !== '') {
//             const message = {
//                 sender: user,
//                 receiver: user === 'user1' ? 'user2' : 'user1',
//                 text: newMessage,
//                 timestamp: new Date().toLocaleTimeString()
//             };
//             setMessages([...messages, message]);
//             setNewMessage('');
//         }
//     };

//     return (
//         <Container className={styles.container}>
//             <Card className={styles.chatBox}>
//                 <Typography variant="h5" gutterBottom>
//                     Chat
//                 </Typography>
//                 <div className={styles.messageList}>
//                     {messages.map((message, index) => (
//                         <Typography
//                             key={index}
//                             className={`${styles.message} ${message.sender === user ? styles.sent : styles.received}`}
//                         >
//                             {message.timestamp} - {message.sender}: {message.text}
//                         </Typography>
//                     ))}
//                 </div>
//                 <form className={styles.form} onSubmit={handleSendMessage}>
//                     <TextField
//                         variant="filled"
//                         label="Digite sua mensagem"
//                         fullWidth
//                         value={newMessage}
//                         onChange={(e) => setNewMessage(e.target.value)}
//                         className={styles.input}
//                     />
//                     <Button type="submit" variant="contained" className={styles.button}>
//                         Enviar
//                     </Button>
//                 </form>
//             </Card>
//         </Container>
//     );
// }

// export default Chat;
