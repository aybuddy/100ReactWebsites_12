import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072',
    },
    {
      name: 'elon musk',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
  ]);

  // BAD way, standard JS way
  // const people = []
  // people.push('steve', 'elon')

  // GOOD way, React way
  // setPeople([...people, 'steve', 'elon'])

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
