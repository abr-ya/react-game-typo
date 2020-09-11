import React, { useState, useEffect, useCallback } from 'react';
import {
  StyledGame, StyledScore, StyledTimer, StyledCharacter,
} from '../styled/Game';
import { Strong } from '../styled/Random';

const Game = ({ history }) => {
  const MAX_SECONDS = 10;
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const [currentCharacter, setCurrentCharacter] = useState('-');
  const [score, setScore] = useState(0);
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

  const getRandomCharacter = (line) => {
    const randomInt = Math.floor(Math.random() * line.length);
    return line[randomInt];
  };

  useEffect(() => {
    setCurrentCharacter(getRandomCharacter(characters));
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

  const keyUpHandler = useCallback((e) => {
    if (e.key === currentCharacter) {
      setScore((prevScore) => prevScore + 1);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (score > 0) {
        setScore((prevScore) => prevScore - 1);
      }
    }
    setCurrentCharacter(getRandomCharacter(characters));
  }, [currentCharacter]);

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyUpHandler]);

  return (
    <StyledGame>
      <StyledScore>
        Score:
        <Strong>
          {score}
        </Strong>
      </StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
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
