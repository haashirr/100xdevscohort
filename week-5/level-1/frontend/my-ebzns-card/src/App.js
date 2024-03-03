import React, {useState, useEffect} from 'react';
import Card from './components/Card';

import CardCreation from './components/CardCreation';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('http://localhost:3001/cards');
      const data = await response.json();
      setCards(data);
    };
    fetchCards();
  }, []);

  const handleCardCreation = async (newCardData) => {
    const response = await fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' },
      body: JSON.stringify(newCardData)
      });
      if(response.ok) {
        const newCard = await response.json();
        setCards([...cards, newCard]);
      }
      else {
        console.log('Error creating card', response.status);
      }
  };
  return (
    <div>
      <h1>E-Business Cards</h1>
      <CardCreation onCardSubmit={handleCardCreation} />
      <div className="cards-container">
        {cards.map((card) => {
          <Card key={card._id} {...card} />
        })}
      </div>
    </div>
  )
}

export default App;