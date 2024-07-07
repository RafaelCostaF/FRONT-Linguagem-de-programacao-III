'use client'
import { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Container } from '@mui/material';
import { getAllEvents, createEvent } from '../util/api';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/EventList.module.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents(token);
      setEvents(events);
    };
    fetchEvents();
  }, [token]);

  const handleCreateEvent = async () => {
    await createEvent({ name: eventName, date: eventDate }, token);
    const updatedEvents = await getAllEvents(token);
    setEvents(updatedEvents);
  };

  return (
    <Container className={styles.container}>
      <TextField
        label="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className={styles.input}
      />
      <TextField
        label="Event Date"
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className={styles.input}
        InputLabelProps={{ shrink: true }}
      />
      <Button onClick={handleCreateEvent} variant="contained" className={styles.button}>
        Create Event
      </Button>
      <List className={styles.list}>
        {events.map((event) => (
          <ListItem key={event.id}>
            <ListItemText primary={event.name} secondary={event.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default EventList;
