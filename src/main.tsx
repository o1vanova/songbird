import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader';
import App from './pages/App';
import AppStore from './app/AppStore';

const store = new AppStore();
store.initialize();

const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const AppWithHot = hot(module)(AppProvider);

ReactDOM.render(
  <AppWithHot />,
  document.getElementById('root')
);
