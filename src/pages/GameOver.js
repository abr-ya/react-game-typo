import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledH1 } from '../styled/Random';

const GameOver = ({ history }) => {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [name] = useState(user['https://name'] || user.nickname || 'Anonymus'); // temp
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState('if you got more than 0 points, sending...');
  const [NotLoginMessage] = useState('You should log in or sign up to compete for highScores!');
  // console.log(`Game Over, ${score} scores`);
  // console.log(history);

  if (score === -1) {
    // console.log('очков нет - переходим на главную');
    history.push('/');
  }

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently();
        const options = {
          method: 'POST',
          body: JSON.stringify({ name, score }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch('/.netlify/functions/saveHighScores', options);
        const data = await res.json();
        // console.log('server answer: ', data);
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
    if (isAuthenticated && score > 0) saveHighScore();
  }, [score, name, getAccessTokenSilently, isAuthenticated]);

  return (
    <div>
      <StyledH1>Game Over</StyledH1>
      <p>Your result is: </p>
      <StyledCharacter>{score}</StyledCharacter>
      <h2>{isAuthenticated ? scoreMessage : NotLoginMessage}</h2>
      <hr />
      <StyledLink to="/">Go Home</StyledLink>
      <hr />
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  );
};

export default GameOver;
