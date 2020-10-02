import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Global from './styled/Global';
import Main from './styled/Main';
import { Container } from './styled/Container';
import { lightTheme, darkTheme } from './styled/Themes';
import useTheme from './hooks/UseTheme';

const App = () => {
  const { isLoading } = useAuth0();

  const [theme, toggleTheme] = useTheme();
  console.log(theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <Global />
        <Main>
          {!isLoading ? (
            <Container>
              <Navbar toggleTheme={toggleTheme} />
              <Switch>
                <Route path="/game" component={Game} />
                <Route path="/highscores" component={HighScores} />
                <Route path="/gameover" component={GameOver} />
                <Route path="/" component={Home} />
              </Switch>
            </Container>
          ) : (
            <p>Auth loading...</p>
          )}
        </Main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
