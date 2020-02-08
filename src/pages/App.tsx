import { observer } from 'mobx-react';
import React, { Fragment } from 'react';
import useStore from 'app/hooks';
import Header from 'components/header/Header';

import './App.scss';

const App = observer(() => {
  const store = useStore();

  if (store.initialized) {
    return (
      <Fragment>
        <Header />
        <main className="main">
        </main>
      </Fragment>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
});

export default App;
