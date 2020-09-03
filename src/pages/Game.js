import React from 'react';
import {
  StyledGame, StyledScore, StyledTimer, StyledCharacter,
} from '../styled/Game';
import { Strong } from '../styled/Random';

const Game = () => (
  <StyledGame>
    <StyledScore>
      Score:
      <Strong> 0</Strong>
    </StyledScore>
    <StyledCharacter>A</StyledCharacter>
    <StyledTimer>
      Time:
      <Strong> 12:34</Strong>
    </StyledTimer>
  </StyledGame>
);

export default Game;
