import React, { useState, useEffect } from 'react';
import {
  StyledGame, StyledScore, StyledTimer, StyledCharacter,
} from '../styled/Game';
import { Strong } from '../styled/Random';

const Game = ({history}) => {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  const addLeadingZeros = (num, length) => {
    let zeros = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      zeros += '0';
    }
    return (zeros + num).slice(-length);
  };

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msStr = (endTime.getTime() - startTime.getTime()).toString();
    // 00000 - first 2 are the seconds, last 3 are the ms
    const formattedMsStr = (`0000${msStr}`).slice(-5);
    const upSec = MAX_SECONDS - parseInt(formattedMsStr.substring(0, 2), 10) - 1;
    const upMs = 1000 - parseInt(formattedMsStr.substring(formattedMsStr.length - 3), 10);
    setSeconds(addLeadingZeros(upSec, 2));
    setMs(addLeadingZeros(upMs, 3));
  };

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= -1) { // seconds <= 0 && ms <= 100
      console.log('game over!');
      history.push('/gameover');
    }
  }, [seconds, ms, history]);

  return (
    <StyledGame>
      <StyledScore>
        Score:
        <Strong>
          {score}
        </Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time:
        <Strong>
          {`${seconds}:${ms}`}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
