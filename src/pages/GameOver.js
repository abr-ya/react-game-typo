import React from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';

const GameOver = ({ history }) => {
  const [score] = useScore();
  console.log(`Game Over, ${score} scores`);
  console.log(history);

  if (score === -1) {
    console.log('очков нет - переходим на главную');
    history.push('/');
  }

  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  );
};

export default GameOver;
