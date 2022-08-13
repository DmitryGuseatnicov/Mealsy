import React, { FC } from 'react';
import './Title.scss';

interface ITitle {
  level: number;
  size: 'small' | 'medium' | 'big' | 'huge';
  children?: React.ReactNode;
}

const sizeVariants = {
  small: 'title_small',
  medium: 'title_medium',
  big: 'title_big',
  huge: 'title_huge'
};

const Title: FC<ITitle> = (props) => {
  const { level, size, children } = props;

  const classes = ['title', sizeVariants[size]].join(' ');

  if (level === 1) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (level === 2) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (level === 3) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (level === 4) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (level === 5) {
    return <h1 className={classes}>{children}</h1>;
  }

  return <h6 className={classes}>{children}</h6>;
};

export type { ITitle };
export default Title;
