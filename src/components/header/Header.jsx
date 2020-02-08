import { observer } from 'mobx-react';
import * as React from 'react';
import useStore from 'app/hooks';

import './Header.scss';

const Header = observer(() => {
  const store = useStore();

  return (
    <header className="header page__header">
      <div className="logo header__logo"></div>
      <div className="header__score">
        Score: {store.total}
      </div>
    </header>
  );
});

export default Header;
