import React, { useState, useEffect } from 'react';
import { ScoresList, ScoreItem } from '../styled/HighScores';

const HighScores = () => {
  // call getHighcores function
  const [highScores, setHighScores] = useState([]);
  //const []

  useEffect(() => {
    console.log('getting HighScores');
    const loadHighScores = async () => {
      try {
        const res = await fetch('/.netlify/functions/getHighScores');
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };
    loadHighScores();
  }, []);

  return (
    <div>
      <h1>HighScores</h1>
      <ScoresList>
        {highScores.map((score) => (
          <ScoreItem key={score.id}>{`${score.fields.name} - ${score.fields.score}`}</ScoreItem>
        ))}
      </ScoresList>
    </div>
  );
};

export default HighScores;
