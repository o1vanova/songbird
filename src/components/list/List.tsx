import React, { ReactNode, FunctionComponent } from 'react';

import './List.scss';

interface ListProps {
  children?: ReactNode;
}

const List: FunctionComponent<ListProps> = (props: ListProps) => {
  return (
    <div className="answer__list">
      {props.children}
    </div>
  );
};

export default List;
