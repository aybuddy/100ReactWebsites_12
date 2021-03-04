import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // where code runs
    database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

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
