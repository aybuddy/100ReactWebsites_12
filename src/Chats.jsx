import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name='Kathryn'
        message='Hey! How are you? 😊'
        timestamp='35 minutes ago'
        profilePic='https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/katheryn-winnick-headshot-2.jpg'
      />
      <Chat
        name='Scarlett'
        message='Whats Up ❤'
        timestamp='55 minutes ago'
        profilePic='https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg'
      />
      <Chat
        name='Suzy'
        message='Hello there! 😘'
        timestamp='1 hour ago'
        profilePic='https://asianwiki.com/images/d/d0/Bae_Suzy-PR002.jpg'
      />
      <Chat
        name='Margot'
        message='Hiiii 👋'
        timestamp='3 days ago'
        profilePic='https://assets.vogue.com/photos/5cf7f4a9747ce17084fb9482/3:4/w_1800,h_2400,c_limit/00-promo-margot-robbie.jpg'
      />
    </div>
  );
};

export default Chats;
