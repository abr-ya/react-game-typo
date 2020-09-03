import React from 'react';
import ToGameLink from '../styled/ToGameLink';
import { Accent, StyledH1 } from '../styled/Random';

const Home = () => (
  <div>
    <StyledH1>Ready to type?</StyledH1>
    <ToGameLink to="/game">
      Click or type
      <Accent> &apos;s&apos; </Accent>
      to start playing!
    </ToGameLink>
  </div>
);

export default Home;
