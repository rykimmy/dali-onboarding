import React from 'react';
import Deck from './deck';
import '../style.scss';
import exampleInfo from '../assets/information.json';

function Home() {
  return (
    <Deck group={exampleInfo} />
  );
}

export default Home;
