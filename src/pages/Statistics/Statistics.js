import React from 'react';

const Statistics = ({ playerName, score }) => {
  return (
    <div>
      <h2>Player Statistics</h2>
      <p>Name: {playerName}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Statistics;
