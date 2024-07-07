// components/GroupList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const GroupList = ({ groups }) => (
    <List>
        {groups.map((group) => (
            <ListItem key={group.id}>
                <ListItemText primary={group.name} />
            </ListItem>
        ))}
    </List>
);

export default GroupList;
