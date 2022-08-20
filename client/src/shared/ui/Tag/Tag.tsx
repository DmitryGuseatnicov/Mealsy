import React, { FC } from 'react';

import Icon from '../Icon/Icon';
import './Tag.scss';

const colorVariants = {
  main: 'tag_color-main',
  second: 'tag_color-second'
};

interface ITag {
  value: string;
  color?: keyof typeof colorVariants;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tag: FC<ITag> = (props) => {
  const { value, color = 'second', onClick } = props;

  const classes = ['tag', colorVariants[color], onClick ? 'tag_with-button' : ''].join(' ');

  if (onClick) {
    return (
      <div className={classes}>
        <div className="tag__value">{value}</div>
        <button className="tag__button" type="button">
          <Icon color="lighter" name="close" size="small" />
        </button>
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className="tag__value">{value}</div>
    </div>
  );
};

export type { ITag };
export default Tag;
