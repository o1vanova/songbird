import React, { FunctionComponent } from 'react';
import data from 'constants/mock';
import classNames from 'classnames';

import './NavHeader.scss';

interface NavHeaderProps {
  name: number
}

const NavHeader: FunctionComponent<NavHeaderProps> = (props: NavHeaderProps) => {
  const className = (name) => classNames(
    'section-nav__item',
    {'section-nav__item--selected': props.name == name || false}
  );

  return (
    <section className="section-nav">
      {data.categories.map((category, index) => {
        return (
          <div key={index} className={className(index)}>{category}</div>
        );
      })}
    </section>
  );
};

export default NavHeader;
