import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './pages/App';

const AppWithHot = hot(module)(App);

ReactDOM.render(
  <AppWithHot />,
  document.getElementById('root')
);
