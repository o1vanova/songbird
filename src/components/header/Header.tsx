import React, { FunctionComponent } from 'react';
import './Header.scss';

type HeaderProps = {
  total: number
}

const Header: FunctionComponent<HeaderProps> = ({total}) => {

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__score">
        Score: {total}
      </div>
    </header>
  );
};

export default Header;
