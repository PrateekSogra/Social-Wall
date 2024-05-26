import Feed from './components/Feed';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';

function App() {

  const [friends] = useState([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Kory' }, { id: 4, name: 'Jake' }, ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});

  const selectFriend = (friend) => {
    setSelectedFriend(friend)
  }

  const sendMessage = (friend, message) => {
    setMessages({
      ...messages,
      [friend.id]: [...(messages[friend.id] || []), message],
    })
  }

  return (
    <div className="App">
      <Header/>
      <div className='app-body'>
        <Feed/>
      </div>
      <ChatWindow
        friends={friends}
        selectFriend={selectFriend}
        selectedFriend={selectedFriend}
        sendMessage={sendMessage}
        messages={messages}
      />
    </div>
  )
}

export default App;
