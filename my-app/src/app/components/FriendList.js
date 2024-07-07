'use client'
import { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Container } from '@mui/material';
import { getAllFriends, addFriend } from '../util/api';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/FriendList.module.css';

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const [friendId, setFriendId] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await getAllFriends(token);
      setFriends(friends);
    };
    fetchFriends();
  }, [token]);

  const handleAddFriend = async () => {
    await addFriend(friendId, token);
    const updatedFriends = await getAllFriends(token);
    setFriends(updatedFriends);
  };

  return (
    <Container className={styles.container}>
      <TextField
        label="Friend ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
        className={styles.input}
      />
      <Button onClick={handleAddFriend} variant="contained" className={styles.button}>
        Add Friend
      </Button>
      <List className={styles.list}>
        {friends.map((friend) => (
          <ListItem key={friend.id}>
            <ListItemText primary={friend.fullName} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FriendList;
