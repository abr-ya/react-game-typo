import React, { useState, useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ToGameLink from '../styled/ToGameLink';
import { Accent, StyledH1 } from '../styled/Random';

const Home = ({ history }) => {
  const { user } = useAuth0();
  const [name] = useState(user['https://name'] || user.nickname || 'Anonymus'); // temp

  const keyUpHandler = useCallback((e) => {
    if (e.key === 's') {
      console.log('start by keyboard...');
      history.push('/game');
    }
  }, [history]);

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyUpHandler]);

  return (
    <div>
      <p>{`Hello, ${name}!`}</p>
      <StyledH1>Ready to type?</StyledH1>
      <ToGameLink to="/game">
        Click or type
        <Accent> &apos;s&apos; </Accent>
        to start playing!
      </ToGameLink>
    </div>
  );
};

export default Home;
