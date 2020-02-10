import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = {
  disabled?: boolean,
  title: string,
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {

  const className = classNames(
    'button',
    {'button__disabled': props.disabled || false}
  );

  const handleClick = () => {
    if (props.disabled) {
      return;
    } else {
      props.onClick();
    }
  }

  return (
    <button  onClick={handleClick} className={className} >
      {props.title}
    </button>
  );
};

export default Button;
