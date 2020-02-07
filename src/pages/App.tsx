import { observer } from 'mobx-react';
import * as React from 'react';
import useStore from 'app/hooks';

const App = observer(() => {
  const store = useStore();

  if (store.initialized) {
    return (
      <div>Test</div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
});

export default App;
