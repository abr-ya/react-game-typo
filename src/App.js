import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/game" component={Game} />
      <Route path="/highscores" component={HighScores} />
      <Route path="/gameover" component={GameOver} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
