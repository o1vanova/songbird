import React, { MouseEventHandler, FunctionComponent } from 'react';
import classNames from 'classnames';

interface ItemProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  name: string;
  clicked: boolean;
  clickedRight: boolean;
}

const ListItem: FunctionComponent<ItemProps> = (props: ItemProps) => {
  const clicked = props.clicked;

  const className = classNames(
    'answer__item',
    {'answer__item--good': clicked && props.clickedRight},
    {'answer__item--bad': clicked && !props.clickedRight},
  );

  return (
    <div className={className} onClick={props.onClick}>
      <span className="answer__status"></span>
      <span className="answer__text">{props.name}</span>
    </div>
  );
};

export default ListItem;
