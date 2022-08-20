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
  onClick?: (e: { value: string }) => void;
}

const Tag: FC<ITag> = (props) => {
  const { value, color = 'second', onClick } = props;

  const classes = ['tag', colorVariants[color], onClick ? 'tag_with-button' : ''].join(' ');

  if (onClick) {
    const handleTagButtonClick = () => {
      onClick({ value });
    };

    return (
      <div className={classes}>
        <div className="tag__value">{value}</div>
        <button className="tag__button" type="button" onClick={handleTagButtonClick}>
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
