/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

import '../style.scss';

// name and bio are parameters for calling the card function
function Card({ name, bio }) {
  // creating a showBio variable (boolean of whether to show bio) with a setting function
  const [showBio, setShowBio] = useState();

  // sets showBio to false if name or bio change (when switching cards)
  useEffect(() => {
    setShowBio(false);
  }, [name, bio]); // if empty, will rerun the useEffect once when component is first rendered

  return (
    <div
      className="card"
      onClick={() => {
        setShowBio(!showBio);
      }}
    >
      <p>{showBio ? bio : name}</p>
    </div>
  );
}

export default Card;
