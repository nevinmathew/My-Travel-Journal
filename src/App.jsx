import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import data from './data/data'; 
import Cards from './components/Cards';
import './App.css';

function App() {

  const cards = data.map((place) => {
      return <Cards
        key={place.key}
        place = {place}
      />
    }
  )

  return (
    <div>

      <nav className='header'>
        <FontAwesomeIcon icon={faEarthAsia} />
        <h2> My Travel Journal</h2>
      </nav>

      <section className='cards-section'>
        {cards}
      </section>
      
    </div>
  )
}

export default App
