/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Card from './card';
import '../style.scss';

function Deck({ group }) {
  const groupName = Object.keys(group)[0];
  const memberNames = Object.keys(group[groupName]);

  // some set state functions for the card index, changing the name, and changing the bio of the current card
  

  // a useEffect that changes the name and bio passed into Card whenever the index changes

  if (group) {
    return (
      // title

      // deck
        // left button
    );
  } else {
    return <div />;
  }

  // return (
  //   <Card name="ryan" bio="I am from Hong Kong" />
  // );
}

export default Deck;
