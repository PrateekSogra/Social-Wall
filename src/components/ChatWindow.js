// src/components/ChatWindow.js
import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import './ChatWindow.css'

const ChatWindow = ({ friends, selectFriend, selectedFriend, sendMessage, messages }) => {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(selectedFriend, message);
      setMessage('');
    }
  };

  return (
    <div className='chat-window'>
      <div className='friend-list'>
        <Input 
          type='text' 
          placeholder='Search friends...' 
          onChange={(e) => selectFriend(e.target.value)} 
        />
        {friends.map((friend) => (
          <div key={friend.id} onClick={() => selectFriend(friend)}>
            {friend.name}
          </div>
        ))}
      </div>
      {selectedFriend && (
        <div className='chat-box'>
          <div className='messages'>
            {messages[selectedFriend.id]?.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </div>
          <form onSubmit={handleSend}>
            <Input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type a message...'
            />
            <Button variant='contained' type='submit'>
                Send
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
