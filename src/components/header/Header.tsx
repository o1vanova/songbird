import React, { FunctionComponent } from 'react';
import './Header.scss';

interface HeaderProps {
  total: number
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {

  return (
    <header className="header">
      <div className="header__logo">
        <img src="./images/logo.png" alt="logo"/>
      </div>
      <div className="header__score">
        Score: {props.total}
      </div>
    </header>
  );
};

export default Header;
