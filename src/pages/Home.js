import React, { useState, useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ToGameLink from '../styled/ToGameLink';
import { Accent, StyledH1 } from '../styled/Random';

const Home = ({ history }) => {
  const { user } = useAuth0();
  const [name] = useState(user['https://name'] || user.nickname || 'Anonymus'); // temp

  const keyUpHandler = useCallback((e) => {
    if (e.key === 's') {
      // console.log('start by keyboard...');
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
      <p>
        Welcome! It is a very simple game. You have 30 seconds and some symbols on the screen.
        You need to press key with letter, which you see. If you press right key, you will
        get a score, else you will lose a score.
        You should register or use your Google account to compete for highScores.
        Good luck!
      </p>
      <p>
        Добро пожаловать! Это очень простая игра. У вас есть 30 секунд и несколько символов на экране.
        Вам нужно нажать клавишу с буквой, которую вы видите. Если вы нажмете правую клавишу, вы
        получить счет, иначе вы потеряете счет.
        Вы должны зарегистрироваться или использовать свою учетную запись Google,
        чтобы побороться за высокие баллы. Удачи!
      </p>
    </div>
  );
};

export default Home;
