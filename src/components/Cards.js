import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h2>Take only memories, leave only footprints.</h2>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/img-8.jpg"
              text="Travel to the hidden island in Various nations."
              label="Premium"
              path="/services"
            />
            <CardItem 
              src="images/img-4.jpg"
              text="Experience everyghing nature has to offer."
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="images/img-1.jpg"
              text="Look for the waterfall hidden deep in the mountains."
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src="images/img-9.jpg"
              text="It will make more interesting memories than any other trip."
              label="Activity"
              path="/services"
            />
            <CardItem 
              src="images/img-2.jpg"
              text="You can sleep and play in the middle of the vast sea."
              label="Resort"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;