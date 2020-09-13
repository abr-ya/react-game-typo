import React, { useState, useEffect } from 'react';
import { ScoresList, ScoreItem } from '../styled/HighScores';
import { StyledH1 } from '../styled/Random';

const HighScores = () => {
  // call getHighcores function
  const [highScores, setHighScores] = useState([]);

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
      <StyledH1>HighScores</StyledH1>
      <ScoresList>
        {highScores.map((score) => (
          <ScoreItem key={score.id}>{`${score.fields.name} - ${score.fields.score}`}</ScoreItem>
        ))}
      </ScoresList>
    </div>
  );
};

export default HighScores;
