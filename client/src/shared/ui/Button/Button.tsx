/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface IButton {
  size: 'small' | 'medium' | 'big' | 'adaptive';
  color: 'main' | 'second';
  fill: 'main' | 'second';
  outline: 'none' | 'full' | 'horizontal';
  link?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const sizeVariants = {
  small: 'button_size-small',
  medium: 'button_size-medium',
  big: 'button_size-big',
  adaptive: 'button_size-adaptive'
};

const colorVariants = {
  main: 'button_color-main',
  second: 'button_color-second'
};

const fillVariants = {
  main: 'button_fill-main',
  second: 'button_fill-second'
};

const outlineVariants = {
  none: 'button_outline-none',
  full: 'button_outline-full',
  horizontal: 'button_outline-horizontal'
};

const Button: FC<IButton> = (props) => {
  const { size, color, fill, outline, link, onClick, children, type = 'button' } = props;

  const classes = [
    'button',
    link ? 'button_link' : '',
    sizeVariants[size],
    colorVariants[color],
    fillVariants[fill],
    outlineVariants[outline]
  ].join(' ');

  if (link) {
    return (
      <Link to={link} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export type { IButton };
export default Button;
