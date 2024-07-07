'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useAuth } from './context/AuthContext';
import { getAllPosts, getAllMessages, getAllEvents, getAllGroups } from './util/api';
import styles from './styles/Home.module.css';
import NavBar from './components/NavBar';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [events, setEvents] = useState([]);
    const [groups, setGroups] = useState([]);
    const { token } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push('/login');
            return;
        }

        const fetchData = async () => {
            try {
                const [postsData, messagesData, eventsData, groupsData] = await Promise.all([
                    getAllPosts(token),
                    getAllMessages(token),
                    getAllEvents(token),
                    getAllGroups(token),
                ]);
                setPosts(postsData);
                setMessages(messagesData);
                setEvents(eventsData);
                setGroups(groupsData);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };

        fetchData();
    }, [token, router]);

    return (
        <Container className={styles.container}>
            <NavBar />
            <Typography variant="h4" gutterBottom>
                Bem-vindo à Rede Social UNEB
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={styles.paper}>
                        <Typography variant="h6">Posts Recentes</Typography>
                        <List>
                            {posts.map((post) => (
                                <ListItem key={post.id}>
                                    <ListItemText primary={post.content} secondary={post.createdAt} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={styles.paper}>
                        <Typography variant="h6">Mensagens Não Lidas</Typography>
                        <List>
                            {messages.map((message) => (
                                <ListItem key={message.id}>
                                    <ListItemText primary={message.content} secondary={message.sentAt} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={styles.paper}>
                        <Typography variant="h6">Próximos Eventos</Typography>
                        <List>
                            {events.map((event) => (
                                <ListItem key={event.id}>
                                    <ListItemText primary={event.name} secondary={event.date} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={styles.paper}>
                        <Typography variant="h6">Grupos</Typography>
                        <List>
                            {groups.map((group) => (
                                <ListItem key={group.id}>
                                    <ListItemText primary={group.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
