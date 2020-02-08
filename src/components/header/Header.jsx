import * as React from 'react';

import './Header.scss';

const Header = ({total}) => {

  return (
    <header className="header page__header">
      <div className="logo header__logo"></div>
      <div className="header__score">
        Score: {total}
      </div>
    </header>
  );
};

export default Header;
