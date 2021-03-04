import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
    {
      name: 'Kathryn',
      image:
        'https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/katheryn-winnick-headshot-2.jpg',
      message: 'Hello Hi there',
    },
    {
      name: 'Kathryn',
      image:
        'https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/katheryn-winnick-headshot-2.jpg',
      message: 'How are you doing?',
    },
    {
      message: 'Hello Kathryn',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessage([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        You matched with Kathryn on 10/10/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form action='' className='chatScreen__input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='chatScreen__inputField'
          type='text'
          placeholder='Type a message...'
        />
        <button
          type='submit'
          onClick={handleSend}
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
