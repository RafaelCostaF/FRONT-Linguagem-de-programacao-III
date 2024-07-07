// components/FriendList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const FriendList = ({ friends }) => (
    <List>
        {friends.map((friend) => (
            <ListItem key={friend.id}>
                <ListItemText primary={friend.name} />
            </ListItem>
        ))}
    </List>
);

export default FriendList;
