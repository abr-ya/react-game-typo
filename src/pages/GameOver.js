import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledH1 } from '../styled/Random';

const GameOver = ({ history }) => {
  const { user } = useAuth0();
  const [name] = useState(user['https://name'] || user.nickname || 'Anonymus'); // temp
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState('if you got more than 0 points, sending...');
  // console.log(`Game Over, ${score} scores`);
  // console.log(history);

  if (score === -1) {
    // console.log('очков нет - переходим на главную');
    history.push('/');
  }

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ name, score }),
        };
        const res = await fetch('/.netlify/functions/saveHighScores', options);
        const data = await res.json();
        // eslint-disable-next-line no-console
        console.log('server answer: ', data);
        if (data.id) {
          setScoreMessage('Congrats! You got a HighScore!');
        } else {
          setScoreMessage('Sorry, not a HighScore. Please, try again!');
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    if (score > 0) saveHighScore();
  }, [score, name]);

  return (
    <div>
      <StyledH1>Game Over</StyledH1>
      <p>Your result is: </p>
      <StyledCharacter>{score}</StyledCharacter>
      <h2>{scoreMessage}</h2>
      <hr />
      <StyledLink to="/">Go Home</StyledLink>
      <hr />
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  );
};

export default GameOver;
