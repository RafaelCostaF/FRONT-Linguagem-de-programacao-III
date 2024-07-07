// src/components/Messages.js
import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ messages }) => {
    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    <p>{message.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default Messages;
