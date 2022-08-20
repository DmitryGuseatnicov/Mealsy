import React, { FC } from 'react';
import './Icon.scss';
import Svg, { SvgVariants } from './Svg';

const sizeVariants = {
  small: 'icon_size-small',
  standard: 'icon_size-standard',
  big: 'icon_size-big'
};

const colorVariants = {
  main: '#67bb5a',
  danger: '#FD3B3B',
  rare: '#F7931E',
  lighter: '#FFFFFF',
  dark: '#1C1F1D'
};

interface IIcon {
  name: keyof SvgVariants;
  color?: keyof typeof colorVariants;
  size?: keyof typeof sizeVariants;
}

const Icon: FC<IIcon> = (props) => {
  const { name, color = 'main', size = 'standard' } = props;

  const classes = ['icon', sizeVariants[size]].join(' ');

  return (
    <div className={classes}>
      <Svg name={name} color={colorVariants[color]} />
    </div>
  );
};

export type { IIcon };
export default Icon;
