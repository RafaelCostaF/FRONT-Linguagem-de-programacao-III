'use client'
import { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Container } from '@mui/material';
import { getAllGroups, createGroup, joinGroup } from '../util/api';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/GroupList.module.css';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groupId, setGroupId] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    const fetchGroups = async () => {
      const groups = await getAllGroups(token);
      setGroups(groups);
    };
    fetchGroups();
  }, [token]);

  const handleCreateGroup = async () => {
    await createGroup({ name: groupName }, token);
    const updatedGroups = await getAllGroups(token);
    setGroups(updatedGroups);
  };

  const handleJoinGroup = async () => {
    await joinGroup(groupId, token);
    const updatedGroups = await getAllGroups(token);
    setGroups(updatedGroups);
  };

  return (
    <Container className={styles.container}>
      <TextField
        label="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        className={styles.input}
      />
      <Button onClick={handleCreateGroup} variant="contained" className={styles.button}>
        Create Group
      </Button>
      <TextField
        label="Group ID"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
        className={styles.input}
      />
      <Button onClick={handleJoinGroup} variant="contained" className={styles.button}>
        Join Group
      </Button>
      <List className={styles.list}>
        {groups.map((group) => (
          <ListItem key={group.id}>
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GroupList;
