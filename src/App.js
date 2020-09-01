import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Global from './styled/Global';
import Main from './styled/Main';
import { Container } from './styled/Container';

const App = () => (
  <Router>
    <Global />
    <Main>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/highscores" component={HighScores} />
          <Route path="/gameover" component={GameOver} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Main>
  </Router>
);

export default App;
