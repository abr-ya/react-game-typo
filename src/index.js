import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { WithScore } from './contexts/ScoreContext';
import AuthProvider from './AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WithScore>
        <App />
      </WithScore>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
